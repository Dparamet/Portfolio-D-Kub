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

test("featured projects use the provided previews and TRP fallback link", () => {
  const projects = loadProjects();
  const eme = projects.find((project) => project.id === 1);
  const warehouse = projects.find((project) => project.id === 2);
  const mindPaint = projects.find((project) => project.id === 19);
  const trp = projects.find((project) => project.id === 21);

  assert.equal(eme.image, "/projects/eme.webp");
  assert.equal(warehouse.image, "/projects/warehouse.webp");
  assert.equal(mindPaint.image, "/projects/mind-paint.webp");
  assert.equal(trp.image, "/projects/trp.webp");
  assert.equal(
    trp.link,
    "https://trppowersplus.com/",
  );
});

test("featured project previews stay within the image performance budget", () => {
  const projects = loadProjects();
  const featuredProjectIds = new Set([1, 2, 13, 18, 19, 20, 21]);
  const maximumImageBytes = 300 * 1024;

  for (const project of projects.filter(({ id }) => featuredProjectIds.has(id))) {
    assert.match(
      project.image,
      /\.webp$/i,
      `${project.title}: screenshot previews should use WebP`,
    );

    const assetPath = path.join(
      projectRoot,
      "public",
      ...project.image.split("/").filter(Boolean),
    );
    assert.ok(
      fs.existsSync(assetPath),
      `${project.title}: missing optimized preview ${project.image}`,
    );
    assert.ok(
      fs.statSync(assetPath).size <= maximumImageBytes,
      `${project.title}: preview exceeds the 300 KB performance budget`,
    );
  }
});

test("public demos and POS visibility match the portfolio settings", () => {
  const projects = loadProjects();
  const weather = projects.find((project) => project.id === 13);
  const portfolio = projects.find((project) => project.id === 18);
  const mindPaint = projects.find((project) => project.id === 19);
  const pos = projects.find((project) => project.id === 20);

  assert.equal(weather.link, "https://weather-web-frontend-rho.vercel.app/");
  assert.equal(weather.image, "/projects/weather.webp");
  assert.equal(portfolio.link, "https://portfolio-d-kub.vercel.app/");
  assert.equal(portfolio.image, "/projects/portfolio.webp");
  assert.equal(mindPaint.link, "https://mind-paint.vercel.app/");
  assert.equal(pos.visibility, "Private");
  assert.equal(pos.image, "/projects/POS.webp");
});
