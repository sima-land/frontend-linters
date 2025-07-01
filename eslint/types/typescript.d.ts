export default configs;
declare const configs: ({
    readonly rules: Readonly<Linter.RulesRecord>;
} | import("@typescript-eslint/utils/ts-eslint").FlatConfig.Config | {
    name: string;
    rules: {
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/explicit-module-boundary-types': string;
        'no-unused-vars': string;
        '@typescript-eslint/no-unused-vars': string;
        'no-shadow': string;
        '@typescript-eslint/no-shadow': (string | {
            builtinGlobals: boolean;
        })[];
        'no-use-before-define': string;
        '@typescript-eslint/no-use-before-define': (string | {
            variables: boolean;
            functions: boolean;
            classes: boolean;
        })[];
        'no-unused-expressions': string;
        '@typescript-eslint/no-unused-expressions': string;
        '@typescript-eslint/explicit-member-accessibility': (string | {
            accessibility: string;
        })[];
    };
})[];
