const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,

  entry: [
    'whatwg-fetch',
    'webpack-dev-server/client?http://127.0.0.1:8080',
    './src/index.jsx',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  devServer: {
    contentBase: './public',
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = config;
