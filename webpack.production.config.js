const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/components/navbar/navbar.ts',
    output: {
      libraryTarget: 'umd',
      filename: 'script.js',
      path: path.resolve(__dirname, './dist/'),
      publicPath: '/'
    },
    mode: 'production',
    optimization: {
      concatenateModules: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
            terserOptions: {
                keep_classnames: true,
                keep_fnames: false,
            }
          })
        ]
    },
    module: {
      rules: [
        {
            enforce: 'pre',
            test: /\.tsx?$/,
            exclude: [/\/node_modules\//],
            use: ['awesome-typescript-loader', 'source-map-loader'],
        },
        {
          enforce: 'pre',
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
          ],
          exclude: [
            '/src/index-style/index-style.scss'
          ],
        },
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new CleanWebpackPlugin(),
    ]
};
