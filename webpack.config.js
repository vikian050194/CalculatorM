var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["./js/index.js", "bootstrap-loader/extractStyles",  "./js/index.css.js"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=1024&name=/fonts/[name].[ext]"
            }
        ]
    },
    output: {
        filename: "./bundle.js",
        path: __dirname + "/build"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "Cookies": "js-cookie"
        }),
        new ExtractTextPlugin("./bundle.css")
    ]
};