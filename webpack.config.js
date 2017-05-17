var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./public/js/app.js",
    
    output: {
        path: __dirname + '/build/',
        filename: "js/bundle.js"
    },

    module: {   
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
            },
            {
                test: /\.css$/,
                use: [
                "style-loader",
                "css-loader",
                "postcss-loader"
            ]
        }
        ],
    },

    plugins: [

        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + '/public/index.html',
        }),

        // Squash that code down
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};