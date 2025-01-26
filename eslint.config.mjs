import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ),
  {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  },
  {
    plugins: ["react", "prettier"],
  },
  {
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "react/react-in-jsx-scope": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/require-default-props": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "no-unused-vars": "off",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    overrides: [
      {
        files: ["*.tsx"],
        rules: {
          "react/require-default-props": "off",
        },
      },
    ],
  },
];

export default eslintConfig;
