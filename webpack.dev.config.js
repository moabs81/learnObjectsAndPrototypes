const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
//const eslintFormatter = require('eslintFormatter');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'devBundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jQuery',
            'window.$': 'jQuery',
            'jQuery': 'jQuery',
            '$': 'jQuery'
        })
    ],
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                oneOf: [{
                        test: /\.(jpg|jpeg|png|svg)$/,
                        exclude: /node_modules/,
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: '[name]-[hash:6].[ext]'
                        }
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    {
                        test: /\.less$/,
                        exclude: /node_modules/,
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
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name]-[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        inline: true,
        port: 4000
    }
}