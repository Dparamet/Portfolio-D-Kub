import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const validationFile = path.join(projectRoot, "lib", "contactValidation.ts");

function loadValidationModule() {
  const source = fs.readFileSync(validationFile, "utf8");
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

test("valid contact data is trimmed before submission", () => {
  const { validateContactForm } = loadValidationModule();
  const result = validateContactForm({
    from_name: "  Paramet  ",
    from_email: "  paramet@example.com  ",
    message: "  Hello from the portfolio  ",
  });

  assert.deepEqual(result, {
    ok: true,
    data: {
      from_name: "Paramet",
      from_email: "paramet@example.com",
      message: "Hello from the portfolio",
    },
  });
});

test("whitespace-only contact fields are rejected", () => {
  const { validateContactForm } = loadValidationModule();
  const result = validateContactForm({
    from_name: "   ",
    from_email: "   ",
    message: "   ",
  });

  assert.deepEqual(result, { ok: false, reason: "required" });
});

test("invalid email and header control characters are rejected", () => {
  const { validateContactForm } = loadValidationModule();

  assert.deepEqual(
    validateContactForm({
      from_name: "Paramet",
      from_email: "not-an-email",
      message: "Hello",
    }),
    { ok: false, reason: "invalid" },
  );
  assert.deepEqual(
    validateContactForm({
      from_name: "Paramet\r\nBcc: attacker@example.com",
      from_email: "paramet@example.com",
      message: "Hello",
    }),
    { ok: false, reason: "invalid" },
  );
});

test("contact fields over their limits are rejected", () => {
  const { CONTACT_LIMITS, validateContactForm } = loadValidationModule();
  const result = validateContactForm({
    from_name: "P".repeat(CONTACT_LIMITS.name + 1),
    from_email: "paramet@example.com",
    message: "M".repeat(CONTACT_LIMITS.message + 1),
  });

  assert.deepEqual(result, { ok: false, reason: "tooLong" });
});
