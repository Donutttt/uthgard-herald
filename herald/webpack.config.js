const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/base/index.html',
  filename: './index.html',
});

const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.jsx$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
    },
  },
];

const plugins = [
  htmlPlugin,
];

const devServer = {
  contentBase: './src',
};

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src', 'base'),
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'build.js',
  },
  module: {
    rules,
  },
  plugins,
  devServer,
};
