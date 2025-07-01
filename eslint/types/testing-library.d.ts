export default config;
declare namespace config {
    let name: string;
    let rules: {
        'no-restricted-syntax': (string | {
            selector: string;
            message: string;
        })[];
    };
}
