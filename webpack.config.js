const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
  },
  output: {
    publicPath: '//localhost:8081/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|gif)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devtool: 'inline-source-map',
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      production: false,
    }),
  ],
};
