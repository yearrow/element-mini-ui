/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-11 09:26:19
 * @LastEditTime: 2019-10-21 20:40:04
 */
/* eslint-disable no-undef */
/**
 * 样例的开发预览
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const root = path.join(__dirname, '../');
const config = require('./config.js');
const markdownConf = require('./markdown.conf.js');
module.exports = {
    mode: 'production',
    entry: path.join(root, 'example/main.js'),
    output: {
      path: path.resolve(process.cwd(), './docs/'),
      publicPath: process.env.CI_ENV || '',
      filename: '[name].[hash:7].js',
      chunkFilename:'[name].[hash:7].js'
    },
    stats:{
        all:false,
        colors: true,
        assets: true,
        assetsSort: '!size',
        children: false,
        builtAt: false,
        chunks: false,
        entrypoints: false,
        modules:false,
        errors: true,
        warnings: true,
  
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.md'],
        alias: config.alias
      },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                // eslint-disable-next-line no-undef
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
              test: /\.(sass|scss|css)$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.md$/,
                use: [
                {
                    loader: 'vue-loader'
                },
                {
                    loader: 'vue-markdown-loader/lib/markdown-compiler',
                    options: markdownConf()
                }
              ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../example/index.html'),
            inject: true
        }),
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};
