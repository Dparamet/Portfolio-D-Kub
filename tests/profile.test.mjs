import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const profileFile = path.join(projectRoot, "data", "profile.ts");

function loadProfile() {
  const source = fs.readFileSync(profileFile, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const testModule = { exports: {} };
  Function("module", "exports", "require", compiled)(
    testModule,
    testModule.exports,
    undefined,
  );

  return testModule.exports.profile;
}

test("profile provides the requested Thai full name", () => {
  const profile = loadProfile();

  assert.equal(
    profile.nameTH,
    "นายปรเมศว์ เดนนิส โฮค อาร์ริงตัน 4",
  );
});
