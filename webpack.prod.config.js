var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'devBundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            /*{
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },*/
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jQuery',
            'window.$': 'jQuery',
            'jQuery': 'jQuery',
            '$': 'jQuery'
        })
    ]
}