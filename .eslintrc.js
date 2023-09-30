module.exports = {
  extends: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    project: "./tsconfig.eslint.json",
    extraFileExtensions: [".json"],
  },
  rules: {
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "max-classes-per-file": 0,
    "no-console": "off",
    "import/no-anonymous-default-export": 0,
  },

  plugins: ["prettier"],
  ignorePatterns: ["**/*.json", "src/package.json"],
};
