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
    let rules: any;
}
import jsdoc from 'eslint-plugin-jsdoc';
