export default config;
declare const config: {
    name: string;
    rules: {
        'jsdoc/check-tag-names': (string | {
            definedTags: string[];
        })[];
        'jsdoc/require-jsdoc': (string | {
            checkGetters: boolean;
            checkSetters: boolean;
            contexts: string[];
            require: {
                ArrowFunctionExpression: boolean;
                ClassDeclaration: boolean;
                ClassExpression: boolean;
                FunctionDeclaration: boolean;
                FunctionExpression: boolean;
                MethodDefinition: boolean;
            };
        })[];
        'jsdoc/check-indentation': string;
        'jsdoc/check-param-names': (string | {
            checkDestructured: boolean;
        })[];
        'jsdoc/tag-lines': string[];
        'jsdoc/no-undefined-types': string[];
        'jsdoc/require-description-complete-sentence': (string | {
            tags: string[];
        })[];
        'jsdoc/require-param': (string | {
            checkDestructured: boolean;
        })[];
        'jsdoc/require-param-description': string;
        'jsdoc/require-param-name': string;
        'jsdoc/require-param-type': string;
        'jsdoc/require-yields': string;
        'jsdoc/require-returns': string;
        'jsdoc/require-returns-check': string;
        'jsdoc/require-returns-description': string;
        'jsdoc/require-returns-type': string;
        'jsdoc/valid-types': string;
    };
    plugins: {
        jsdoc: import("eslint").ESLint.Plugin & {
            configs: Record<`flat/${import("eslint-plugin-jsdoc").ConfigGroups}${import("eslint-plugin-jsdoc").ConfigVariants}${import("eslint-plugin-jsdoc").ErrorLevelVariants}`, import("eslint").Linter.Config>;
        };
    };
    settings: {
        jsdoc: {
            mode: string;
            tagNamePreference: {
                arg: string;
                argument: string;
                class: string;
                returns: string;
                virtual: string;
            };
            preferredTypes: {
                any: string;
                array: string;
                Boolean: string;
                float: string;
                function: string;
                int: string;
                integer: string;
                Null: string;
                Number: string;
                object: string;
                String: string;
                Symbol: string;
                Undefined: string;
            };
        };
    };
};
