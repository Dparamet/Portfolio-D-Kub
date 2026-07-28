import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const softSkillsFile = path.join(projectRoot, "data", "softskills.ts");

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

test("soft-skill cards 1-10 use the profile photo aligned to the top", () => {
  const softSkills = loadSoftSkills();

  for (const item of softSkills.filter(({ id }) => id <= 10)) {
    assert.equal(item.image, "/profile.jpg", `${item.title}: image`);
    assert.equal(
      item.imageAlt,
      "Dparamet practicing continuous self improvement",
      `${item.title}: imageAlt`,
    );
    assert.equal(item.imagePosition, "top", `${item.title}: imagePosition`);
  }
});

test("territorial defense leadership cards use approved content and images", () => {
  const softSkills = loadSoftSkills();
  const expected = [
    {
      id: 11,
      titleTH: "ผู้บังคับกองพัน รด.",
      focusTH: "ภาวะผู้นำขั้นสูง",
      image: "/softskills/Battalion Commander.webp",
      personnel: "เกือบ 200 นาย",
    },
    {
      id: 12,
      titleTH: "ผู้บังคับกองร้อย รด.",
      focusTH: "การประสานงานระดับหน่วย",
      image:
        "/softskills/Territorial Defense Student Company Commander.webp",
      personnel: "ประมาณ 100 นาย",
    },
    {
      id: 13,
      titleTH: "ผู้บังคับหมวด รด.",
      focusTH: "ความไว้วางใจและความสามัคคี",
      image: "/softskills/Territorial Defense Student Platoon Leader.webp",
      personnel: "ประมาณ 50 นาย",
    },
  ];

  for (const requirement of expected) {
    const item = softSkills.find(({ id }) => id === requirement.id);
    assert.ok(item, `Missing soft-skill id ${requirement.id}`);
    assert.equal(item.titleTH, requirement.titleTH);
    assert.equal(item.focusTH, requirement.focusTH);
    assert.equal(item.image, requirement.image);
    assert.match(item.descriptionTH, new RegExp(requirement.personnel));
    assert.equal(item.level, "Strong");
    assert.equal(item.category, "Leadership");
    assert.equal(item.imagePosition, "top");
  }
});
