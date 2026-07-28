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

test("site branding uses the optimized D logo", () => {
  const metadata = loadMetadata();
  const iconFile = path.join(projectRoot, "app", "icon.png");
  const icon = fs.readFileSync(iconFile);

  assert.equal(metadata.icons.icon, "/icon.png");
  assert.equal(metadata.icons.shortcut, "/icon.png");
  assert.equal(metadata.icons.apple, "/icon.png");
  assert.deepEqual(metadata.openGraph.images, ["/icon.png"]);
  assert.deepEqual(metadata.twitter.images, ["/icon.png"]);
  assert.deepEqual([...icon.subarray(0, 8)], [
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]);
  assert.ok(icon.length <= 100_000, "logo should stay below 100 KB");
});
