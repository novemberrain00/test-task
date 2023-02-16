const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader' 
      },
      {
        test: /\.svg$/i,
        generator: {
          filename: 'images/icons/[name].[hash].[ext]'
        },
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        generator: {
          filename: 'images/[name].[hash].[ext]'
        },
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff)$/i,
        generator: {
          filename: 'fonts/[name].[hash].[ext]'
        },
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //       {
    //         from: path.resolve(__dirname, 'src/images'),
    //         to:   path.resolve(__dirname, 'dist/images')
    //       }
    //     ]
    // })
  ]
};

module.exports = config;
