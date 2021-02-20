module.exports = {
    name: 'used-before-initialization',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    compiler: 'ttypescript',
                },
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    devtool: false,
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.mjs'],
        alias:
            {
                '@effect-ts/core': ['@effect-ts/core/_traced'],
                '@effect-ts/node': ['@effect-ts/node/_traced'],
                '@effect-ts/system': ['@effect-ts/system/_traced'],
            }
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    mode: 'development',
    target: 'node'
};
