export default config;
declare namespace config {
    let name: string;
    namespace plugins {
        export { jsdoc };
    }
    namespace settings {
        export namespace jsdoc_1 {
            let mode: string;
            namespace tagNamePreference {
                export let arg: string;
                export let argument: string;
                let _class: string;
                export { _class as class };
                export let returns: string;
                export let virtual: string;
            }
            namespace preferredTypes {
                export let any: string;
                export let array: string;
                export let Boolean: string;
                export let float: string;
                let _function: string;
                export { _function as function };
                export let int: string;
                export let integer: string;
                export let Null: string;
                export let Number: string;
                export let object: string;
                export let String: string;
                export let Symbol: string;
                export let Undefined: string;
            }
        }
        export { jsdoc_1 as jsdoc };
    }
    let rules: {
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
        'jsdoc/check-tag-names': string;
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
}
import jsdoc from 'eslint-plugin-jsdoc';
