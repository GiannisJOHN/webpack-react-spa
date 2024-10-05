const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true //cleaning the dist folder
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', ['@babel/preset-react', {runtime: "automatic"}]]//no longer need to explicitly import React in every file that uses JSX.
                }
            },
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};