import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const motionFile = path.join(projectRoot, "lib", "motion.ts");

function loadMotionModule() {
  const source = fs.readFileSync(motionFile, "utf8");
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
  return testModule.exports;
}

test("reveal delay uses 80ms steps capped at 400ms", () => {
  const { getRevealDelay } = loadMotionModule();
  assert.equal(getRevealDelay(-1), "0ms");
  assert.equal(getRevealDelay(0), "0ms");
  assert.equal(getRevealDelay(1), "80ms");
  assert.equal(getRevealDelay(5), "400ms");
  assert.equal(getRevealDelay(20), "400ms");
});

test("motion infrastructure shares observers and supports reduced motion", () => {
  const observerSource = fs.readFileSync(
    path.join(projectRoot, "app", "components", "MotionObserver.tsx"),
    "utf8",
  );
  const cssSource = fs.readFileSync(
    path.join(projectRoot, "app", "globals.css"),
    "utf8",
  );

  assert.match(observerSource, /new IntersectionObserver/);
  assert.match(observerSource, /new MutationObserver/);
  assert.match(observerSource, /observer\.unobserve/);
  assert.match(observerSource, /prefers-reduced-motion: reduce/);
  assert.match(cssSource, /data-motion-ready="true"/);
  assert.match(cssSource, /\[data-reveal\]\.is-visible/);
  assert.match(cssSource, /\.motion-card/);
  assert.match(cssSource, /prefers-reduced-motion: reduce/);
});

test("every portfolio section and card family opts into shared motion", () => {
  const files = [
    "app/page.tsx",
    "app/components/ExperienceSection.tsx",
    "app/components/ProjectsSection.tsx",
    "app/components/LabSection.tsx",
  ];
  const source = files
    .map((file) => fs.readFileSync(path.join(projectRoot, file), "utf8"))
    .join("\n");

  for (const sectionId of [
    "home",
    "about",
    "experience",
    "projects",
    "soft-skill",
    "contact",
  ]) {
    assert.match(source, new RegExp(`id="${sectionId}"`));
  }

  assert.match(source, /<MotionObserver \/>/);
  assert.ok(
    (source.match(/data-reveal/g) ?? []).length >= 12,
    "expected reveal motion across all sections",
  );
  assert.ok(
    (source.match(/motion-card/g) ?? []).length >= 6,
    "expected gentle lift on every card family",
  );
});
