import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const layoutSource = fs.readFileSync(
  path.join(projectRoot, "app", "layout.tsx"),
  "utf8",
);
const pageSource = fs.readFileSync(
  path.join(projectRoot, "app", "page.tsx"),
  "utf8",
);

test("skip link targets the main content landmark", () => {
  assert.match(layoutSource, /href="#main-content"/);
  assert.match(layoutSource, /<main id="main-content"/);
});

test("contact fields use explicit labels and feedback semantics", () => {
  for (const id of ["contact-name", "contact-email", "contact-message"]) {
    assert.match(pageSource, new RegExp(`htmlFor="${id}"`));
    assert.match(pageSource, new RegExp(`id="${id}"`));
  }

  assert.match(pageSource, /id="contact-feedback"/);
  assert.match(pageSource, /aria-live="polite"/);
});
