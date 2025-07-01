export default config;
declare namespace config {
    let name: string;
    namespace plugins {
        export { lodash };
    }
    let rules: {
        'lodash/import-scope': string[];
    };
}
