import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const layoutFile = path.join(projectRoot, "app", "layout.tsx");

function loadMetadata() {
  const source = fs.readFileSync(layoutFile, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const testModule = { exports: {} };
  const requireStub = (specifier) => {
    if (specifier === "next/font/google") {
      return { Inter: () => ({ className: "font" }) };
    }
    if (specifier === "react/jsx-runtime") {
      return { jsx: () => null, jsxs: () => null };
    }
    return { __esModule: true, default: () => null };
  };

  Function("module", "exports", "require", compiled)(
    testModule,
    testModule.exports,
    requireStub,
  );

  return testModule.exports.metadata;
}

test("social metadata resolves against the production portfolio URL", () => {
  const metadata = loadMetadata();

  assert.equal(
    metadata.metadataBase?.href,
    "https://portfolio-d-kub.vercel.app/",
  );
  assert.match(metadata.description, /Paramet Dennis Hoke Arrington IV/);
  assert.doesNotMatch(metadata.description, /D Dparamet/);
});
