const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    entry: ["./js/index.js", "bootstrap-loader/extractStyles", "./build.js"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                },
                "eslint-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "fonts",
                    publicPath: "fonts"
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                loader: "url-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "/",
                    publicPath: "/"
                }
            },
            {
                test: /\.(html)$/,
                loader: "url-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "/",
                    publicPath: "/"
                }
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "Cookies": "js-cookie"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    devServer: {
        index: path.resolve(__dirname, "index.html"),
        contentBase: path.resolve(__dirname, "build"),
        publicPath: "/",
        port: 8080,
        watchContentBase: false,
        open: true,
        inline: true
    }
};
