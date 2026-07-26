import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, "..");
const configFile = path.join(projectRoot, "next.config.ts");

function loadNextConfig(environment = process.env.NODE_ENV) {
  const source = fs.readFileSync(configFile, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const testModule = { exports: {} };
  const originalEnvironment = process.env.NODE_ENV;

  try {
    process.env.NODE_ENV = environment;
    Function("module", "exports", "require", compiled)(
      testModule,
      testModule.exports,
      undefined,
    );
  } finally {
    process.env.NODE_ENV = originalEnvironment;
  }

  return testModule.exports.default;
}

test("all routes receive baseline security headers", async () => {
  const config = loadNextConfig();
  assert.equal(config.poweredByHeader, false);
  const rules = await config.headers();
  const values = Object.fromEntries(
    rules[0].headers.map((header) => [header.key, header.value]),
  );

  assert.equal(rules[0].source, "/(.*)");
  assert.equal(values["X-Content-Type-Options"], "nosniff");
  assert.equal(values["X-Frame-Options"], "DENY");
  assert.equal(values["Referrer-Policy"], "strict-origin-when-cross-origin");
  assert.match(values["Permissions-Policy"], /camera=\(\)/);
  assert.match(values["Content-Security-Policy"], /default-src 'self'/);
  assert.match(
    values["Content-Security-Policy"],
    /connect-src 'self' https:\/\/api\.emailjs\.com/,
  );
});

test("CSP permits React debugging eval only in development", async () => {
  const developmentConfig = loadNextConfig("development");
  const productionConfig = loadNextConfig("production");
  const developmentRules = await developmentConfig.headers();
  const productionRules = await productionConfig.headers();
  const developmentCsp = developmentRules[0].headers.find(
    ({ key }) => key === "Content-Security-Policy",
  ).value;
  const productionCsp = productionRules[0].headers.find(
    ({ key }) => key === "Content-Security-Policy",
  ).value;

  assert.match(developmentCsp, /script-src[^;]*'unsafe-eval'/);
  assert.doesNotMatch(productionCsp, /'unsafe-eval'/);
});
