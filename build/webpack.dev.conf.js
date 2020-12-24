/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-14 16:01:03
 * @LastEditTime: 2019-10-22 09:55:27
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const config = require('./config.js');
const markdownConf = require('./markdown.conf.js');
const root = path.join(__dirname, '../');
module.exports =  {
  mode: 'development',
  entry: path.join(root, 'example/main.js'),
  devtool: 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 8034,
    compress: true,
    open: false,
    inline: true,
    quiet: false, // 开启会关闭控制台日志
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
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          name: 'async-vendors',
          chunks: 'async'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.md'],
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
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

// const compiler = webpack(webpackConfig)

// compiler.run()
