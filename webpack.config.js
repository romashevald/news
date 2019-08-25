const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const baseDir = __dirname;
const srcDir = path.resolve(baseDir, 'src');
module.exports = {
    entry: [
        "@babel/polyfill",
        "./src/index.js"
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    }
    , module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader')
                ]
            },
            {
                test: /\.svg$/
                , loader: 'svg-sprite-loader'
                , include: path.resolve(srcDir, 'static/img')
                , options: {
                    symbolId: 'smb-[name]'
                }
            }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.template.html"
            , filename: './index.html'
        })
        , new HtmlWebpackInlineSVGPlugin()
    ]
};