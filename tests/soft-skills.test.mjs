import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const softSkillsFile = path.join(projectRoot, "data", "lab.ts");

function loadSoftSkills() {
  const source = fs.readFileSync(softSkillsFile, "utf8");
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

  return testModule.exports.softSkills;
}

test("soft-skill ids are unique", () => {
  const softSkills = loadSoftSkills();
  const ids = softSkills.map((item) => item.id);

  assert.equal(
    new Set(ids).size,
    ids.length,
    "Every soft-skill card must use a unique id",
  );
});

test("soft skills provide concise Thai card copy", () => {
  const softSkills = loadSoftSkills();

  for (const item of softSkills) {
    assert.ok(item.titleTH?.trim(), `${item.title}: titleTH is required`);
    assert.ok(
      item.descriptionTH?.trim(),
      `${item.title}: descriptionTH is required`,
    );
    assert.ok(item.focusTH?.trim(), `${item.title}: focusTH is required`);
    assert.ok(
      item.descriptionTH.length <= 160,
      `${item.title}: Thai description should stay concise`,
    );
  }
});

test("soft-skill photos use accessible local static assets", () => {
  const softSkills = loadSoftSkills();
  const itemsWithImages = softSkills.filter((item) => item.image);

  assert.ok(
    itemsWithImages.length > 0,
    "Add at least one personal photo to demonstrate the soft-skill image layout",
  );

  for (const item of itemsWithImages) {
    assert.match(
      item.image,
      /^\/.+\.(avif|gif|jpe?g|png|svg|webp)$/i,
      `${item.title}: image must reference a supported file inside /public`,
    );
    assert.ok(
      item.imageAlt?.trim(),
      `${item.title}: imageAlt is required when image is provided`,
    );

    const assetPath = path.join(
      projectRoot,
      "public",
      ...item.image.split("/").filter(Boolean),
    );
    assert.ok(
      fs.existsSync(assetPath),
      `${item.title}: missing image asset ${item.image}`,
    );
  }
});
