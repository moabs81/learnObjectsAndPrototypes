var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.(js)$/,
                use: [{
                    options: {
                        formatter: esLintFormatter,
                        eslintPath: require.resolve('eslint')
                    }
                }],
                loader: require.resolve('eslint-loader')
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: {
                    loader: 'file-loader'
                }
                //include: path.join(__dirname, 'src/imgs/')
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
    devServer: {
        inline: true,
        port: 4000
    }
}