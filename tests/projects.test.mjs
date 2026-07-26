import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const projectsFile = path.join(projectRoot, "data", "projects.ts");

function loadProjects() {
  const source = fs.readFileSync(projectsFile, "utf8");
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

  return testModule.exports.projects;
}

test("project ids are unique", () => {
  const projects = loadProjects();
  const ids = projects.map((project) => project.id);

  assert.equal(
    new Set(ids).size,
    ids.length,
    "Every project card must use a unique id",
  );
});

test("projects provide concise Thai and English card copy", () => {
  const projects = loadProjects();

  for (const project of projects) {
    assert.ok(project.titleTH?.trim(), `${project.title}: titleTH is required`);
    assert.ok(
      project.descriptionTH?.trim(),
      `${project.title}: descriptionTH is required`,
    );
    assert.ok(
      project.description.length <= 180,
      `${project.title}: English description should stay concise`,
    );
    assert.ok(
      project.descriptionTH.length <= 180,
      `${project.title}: Thai description should stay concise`,
    );
  }
});

test("project images use accessible, local static assets", () => {
  const projects = loadProjects();
  const projectsWithImages = projects.filter((project) => project.image);

  assert.ok(
    projectsWithImages.length > 0,
    "Add at least one project image to demonstrate the thumbnail layout",
  );

  for (const project of projectsWithImages) {
    assert.match(
      project.image,
      /^\/projects\/.+\.(avif|gif|jpe?g|png|svg|webp)$/i,
      `${project.title}: image must be a supported file inside /public/projects`,
    );
    assert.ok(
      project.imageAlt?.trim(),
      `${project.title}: imageAlt is required when image is provided`,
    );

    const assetPath = path.join(
      projectRoot,
      "public",
      ...project.image.split("/").filter(Boolean),
    );
    assert.ok(
      fs.existsSync(assetPath),
      `${project.title}: missing image asset ${project.image}`,
    );
  }
});
