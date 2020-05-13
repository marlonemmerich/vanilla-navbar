const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './src'),
        publicPath: ''
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: [/\/node_modules\//],
                use: ['awesome-typescript-loader', 'source-map-loader']
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js'],
      },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        index: 'index.html',
        port: 9000,
        open: true
    },
};