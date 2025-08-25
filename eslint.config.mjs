import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends("prettier"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "prettier/prettier": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: "last",
          ignoreCase: true,
          noSortAlphabetically: false,
        },
      ],
      // Disable sort-imports as we're using prettier-plugin-sort-imports
      "sort-imports": "off",
    },
    plugins: {
      prettier: (await import("eslint-plugin-prettier")).default,
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
