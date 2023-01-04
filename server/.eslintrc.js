module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        node: true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'linebreak-style': 0,
    },
    ignorePatterns: ['*.js'],
};
