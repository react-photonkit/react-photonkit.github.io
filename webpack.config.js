'use strict';

const path = require('path')

module.exports = {
  module: {
		preLoaders: [{
      test: /\.js?/,
      exclude: /node_modules/,
      loader: 'xo-loader'
    }],
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}, {
			test: /bootstrap\/js\//,
			loader: 'imports?jQuery=jquery'
		}, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=1000000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },
  entry: path.resolve(__dirname, 'app/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js'
  },
	xo: {
    extends: ["xo", "xo-react"],
		env: ['browser'],
    rules: {
			'no-alert': 0,
			'react/jsx-no-bind': [2, {
				'ignoreRefs': true,
				'allowArrowFunctions': true
			}],
			'react/require-optimization': 0,
      "quote-props": ["error", "as-needed"]
    }
  }
};
