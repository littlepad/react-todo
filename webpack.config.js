const PATH = require('./gulp/config').default;
const webpack = require('webpack');

module.exports = {
  entry: {
    app: `${PATH.js}app.js`
  },
  output: {
    path: require('path').resolve(`${PATH.public}js/`),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    alias: {
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
