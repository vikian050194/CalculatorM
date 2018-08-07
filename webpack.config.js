var webpack = require('webpack')

module.exports = {
    entry: './js/index.js',
    devtool: "inline-source-map",
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            "Cookies": "js-cookie"
        })]
};