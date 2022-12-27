const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    devtool: false,
    optimization: {
        minimize: isProduction,
    },
    entry: './server.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(process.env.OUT_DIR || 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    target: 'node',
    node: {
        __dirname: true,
    },
    externals: [nodeExternals()],
};
