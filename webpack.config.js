const PATH = require('./gulp/config').default;
const webpack = require('webpack');

module.exports = {
  entry: {
    app: `${PATH.js}app.jsx`
  },
  output: {
    path: require('path').resolve(`${PATH.public}js/`),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
