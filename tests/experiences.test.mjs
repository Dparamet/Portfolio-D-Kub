import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const experiencesFile = path.join(projectRoot, "data", "experiences.ts");

function loadExperiences() {
  const source = fs.readFileSync(experiencesFile, "utf8");
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

  return testModule.exports.experiences;
}

test("experience timeline contains the four resume work entries", () => {
  const experiences = loadExperiences();

  assert.equal(experiences.length, 4);
  assert.equal(new Set(experiences.map((item) => item.id)).size, 4);
});

test("experiences provide concise bilingual timeline content", () => {
  const experiences = loadExperiences();

  for (const item of experiences) {
    assert.ok(item.organization.trim(), `${item.id}: organization is required`);
    assert.ok(item.organizationTH.trim(), `${item.id}: organizationTH is required`);
    assert.ok(item.role.trim(), `${item.id}: role is required`);
    assert.ok(item.roleTH.trim(), `${item.id}: roleTH is required`);
    assert.ok(item.period.trim(), `${item.id}: period is required`);
    assert.ok(item.periodTH.trim(), `${item.id}: periodTH is required`);
    assert.ok(item.description.trim(), `${item.id}: description is required`);
    assert.ok(item.descriptionTH.trim(), `${item.id}: descriptionTH is required`);
    assert.ok(item.description.length <= 220, `${item.id}: English copy is too long`);
    assert.ok(item.descriptionTH.length <= 220, `${item.id}: Thai copy is too long`);
    assert.ok(item.skills.length > 0, `${item.id}: add at least one skill`);
  }
});

test("TRP experience uses the working fallback website", () => {
  const experiences = loadExperiences();
  const trp = experiences.find((item) => item.organization === "TRP Powers Plus");

  assert.equal(
    trp.link,
    "https://landing-page-trp-powers-plus.vercel.app/",
  );
});
