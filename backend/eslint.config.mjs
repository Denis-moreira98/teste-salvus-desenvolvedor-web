import globals from "globals";
import jsPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
   {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
         parser: tsParser,
         parserOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            project: "./tsconfig.json",
         },
         globals: {
            ...globals.node,
            ...globals.browser,
         },
      },
      plugins: {
         "@typescript-eslint": tsPlugin,
      },
      rules: {
         ...tsPlugin.configs.recommended.rules,
         "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_" },
         ],
      },
   },
   {
      files: ["**/*.{js,mjs}"],
      languageOptions: {
         parserOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
         },
         globals: {
            ...globals.node,
            ...globals.browser,
         },
      },
      rules: {
         ...jsPlugin.configs.recommended.rules,
      },
   },
];
