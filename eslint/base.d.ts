export default config;
declare namespace config {
    let name: string;
    namespace languageOptions {
        let globals: any;
    }
    let plugins: {
        '@stylistic': {
            rules: import("@stylistic/eslint-plugin").Rules;
            configs: import("eslint").ESLint.Plugin["configs"] & import("@stylistic/eslint-plugin").Configs;
        };
    };
    let rules: any;
}
