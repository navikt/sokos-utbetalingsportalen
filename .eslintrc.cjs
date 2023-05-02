module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    parser: "@typescript-eslint/parser",
    ignorePatterns: [
        "index.js",
        ".eslintrc.*",
        "**/dist/*.js",
        "vite.config.ts",
        "plugin:react/recommended",
        "**/build/*.js"
    ],
    plugins: ["@typescript-eslint", "jsx-a11y", "react"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended"
    ],
    rules: {
        //ref https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn", // or "error"
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_"
            }
        ],
        "@typescript-eslint/no-var-requires": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
