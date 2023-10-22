module.exports = {
    extends: [
        "prettier",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        "airbnb",
        "airbnb-typescript",
        "plugin:import/typescript",
        "eslint-config-prettier",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: [
        "eslint-plugin-prettier"
    ],
    "ignorePatterns": ["vite.config.ts", "tailwind.config.ts", "postcss.config.js"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "react/button-has-type": "off"
    }
};
