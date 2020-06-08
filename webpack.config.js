const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
require('babel-polyfill');

module.exports = {
  mode: 'production',
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'stylesheets/'
            }
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: false,
      template: './src/index-template.html',
      filename: './index.html',
    }),
  ],
};
