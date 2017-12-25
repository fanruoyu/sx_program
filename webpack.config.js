const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        bundel: './script/src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js'
    },
    devServer: {
        port: 3000,
        open: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'vue-html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.css$/,
                // loader: 'style-loader!css-loader'
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.svg|\.eot|\.ttf|\.woff$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(gif|png|jpg)$/,
                loader: 'file-loader?name=imgs/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue', '.css']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin('styles.css'),
        new CleanPlugin()
    ]
}
