var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');

var loaders = {
  babel: {
    // expects regex
    test: /\.js$/,
    loader: 'babel-loader',
    // exclude or include paths
    exclude: '/node_modules/',
    // pass params to loader like querystring
    // instead of using .babelrc
    query: {
      presets: ['es2015'],
      compact: false
    }
  },
  css: {
    test: /\.css$/,
    loader: 'style!css' // 2 loaders style and css
  },
  sass: {
    test: /\.scss$/,
    loaders: ["style", "css", "sass"]
  }
}

// webpack.config.js - default file for webpack config
// __dirname - absolute path of current file
// entry - file webpack looks for to bundle, default to index.js
// output must include filename
module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [loaders.babel, loaders.css, loaders.sass]
  },
  plugins: [new htmlPlugin({
    template: path.join(__dirname, 'src', 'index.html')
  })],
  devServer: {
    port: 3001, // pick your port number
    devtool: 'eval',
    contentBase: path.join(__dirname, 'build')
  }
}
