var path = require('path');

module.exports = {
  entry: {
    'main': path.resolve(__dirname, 'example/main/index.cjsx'),
    'toolbar': path.resolve(__dirname, 'example/toolbar/index.cjsx'),
    'actionbar': path.resolve(__dirname, 'example/actionbar/index.cjsx'),
    'tab': path.resolve(__dirname, 'example/tab/index.cjsx'),
    'nav': path.resolve(__dirname, 'example/nav/index.cjsx'),
    'list': path.resolve(__dirname, 'example/list/index.cjsx'),
    'button': path.resolve(__dirname, 'example/button/index.cjsx'),
    'btngrp': path.resolve(__dirname, 'example/btngrp/index.cjsx'),
    'form': path.resolve(__dirname, 'example/form/index.cjsx'),
    'table': path.resolve(__dirname, 'example/table/index.cjsx'),
    'icon': path.resolve(__dirname, 'example/icon/index.cjsx'),
    'app': path.resolve(__dirname, 'app/app.cjsx')
  },
  output: {
    path: path.resolve(__dirname, 'out'),
    publicPath: 'out/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass']},

      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=100000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100000&mimetype=image/svg+xml' },

      { test: /\.json$/, loader: 'json-loader' },

      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.(coffee\.md|litcoffee)$/, loader: 'coffee-loader?literate' },
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  }
};
