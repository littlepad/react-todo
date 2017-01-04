import PATH from './gulp/config';
import webpack from 'webpack';

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
        loader: 'babel-loader'
      }
    ]
  }
};
