const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',  // Main app entry point
        //vendors: ['react', 'react-dom'],  // Separate vendor entry point, using substitution in the file name is enough
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true //cleaning the dist folder
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: "automatic" }]]//no longer need to explicitly import React in every file that uses JSX.
                    }
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new MiniCssExtractPlugin()

    ],
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
        runtimeChunk: 'single'
    }
};