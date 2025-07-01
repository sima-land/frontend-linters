export default config;
declare const config: {
    name: string;
    rules: any;
    plugins: {
        jsdoc: any;
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
