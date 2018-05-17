const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.tsx',
    bets: './src/components/Bets/Bets.tsx',
    createBet: './src/components/CreateBet/CreateBet.tsx',
    home: './src/components/Home/Home.tsx',
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
  },
  output: {
    publicPath: '//localhost:8081/',
    filename: '[name].[chunkhash].js',
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
  optimization: {
    occurrenceOrder: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
        blueprintjs: {
          test: /blueprintjs/,
          name: 'blueprintjs',
          chunks: 'all',
        },
        'react-dom': {
          test: /react/,
          name: 'react',
          chunks: 'all',
        },
        tslib: {
          test: /tslib/,
          name: 'tslib',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      production: false,
    }),
  ],
};
