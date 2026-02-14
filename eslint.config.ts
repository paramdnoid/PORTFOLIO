import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // --- Strict type-checked rules ---

      // Explizite Return-Types für öffentliche API-Funktionen
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
      // Konsistente Type-Imports
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      // Keine unsicheren Operationen
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      // Floating Promises verhindern
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/require-await": "error",
      // Strenge Typen-Regeln
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: true,
          allowNumber: false,
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: true,
        },
      ],
      // Keine ungenutzten Variablen (mit Underscore-Ausnahme)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      // Verhindert async-Funktionen an Stellen, die kein Promise erwarten
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: { attributes: false },
        },
      ],
      // Verhindert unsichere Template-Literal-Interpolation
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
          allowBoolean: false,
        },
      ],
      // Erkennt immer-wahre/falsche Bedingungen
      "@typescript-eslint/no-unnecessary-condition": "error",
      // Exhaustive Switch-Statements
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      // Konsistente Type-Definitionen (type statt interface)
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      // Verhindert verwirrende void-Ausdrücke in Expressions
      "@typescript-eslint/no-confusing-void-expression": "error",
      // Erkennt redundante Union/Intersection-Members
      "@typescript-eslint/no-redundant-type-constituents": "error",
      // Erzwingt async-Keyword bei Funktionen, die Promises zurückgeben
      "@typescript-eslint/promise-function-async": "error",
      // Konsistente await-Nutzung in try/catch für korrekte Stack-Traces
      "@typescript-eslint/return-await": ["error", "always"],
      // Warnt bei Nutzung veralteter APIs (wichtig für Upgrade-Zyklen)
      "@typescript-eslint/no-deprecated": "error",
      // Erzwingt readonly für nie-reassignte Class-Properties
      "@typescript-eslint/prefer-readonly": "error",
      // Erzwingt konsistente Methoden-Signaturen in Types (property style)
      "@typescript-eslint/method-signature-style": ["error", "property"],
      // Verhindert Side-Effects bei reinen Type-Imports
      "@typescript-eslint/no-import-type-side-effects": "error",
      // Erkennt redundante Type-Assertions (z.B. `foo as string` wenn foo bereits string ist)
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      // Erzwingt .startsWith() / .endsWith() statt Regex/indexOf
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      // Erzwingt .includes() statt .indexOf() !== -1
      "@typescript-eslint/prefer-includes": "error",
      // Verhindert unsichere Enum-Vergleiche (z.B. enum === string)
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      // Verhindert versehentliche Console-Statements in Production-Code
      "no-console": ["error", { allow: ["warn", "error"] }],

      // Konsistente Namenskonventionen
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["PascalCase"],
        },
      ],
    },
  },
  // CLI-Skripte duerfen console.log verwenden (kein Production-Code).
  {
    files: ["scripts/**/*.ts"],
    rules: {
      "no-console": "off",
    },
  },
  // Disable formatting rules that conflict with Prettier.
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // E2E tests (Playwright has its own config)
    "e2e/**",
    "playwright-report/**",
  ]),
]);

export default eslintConfig;
