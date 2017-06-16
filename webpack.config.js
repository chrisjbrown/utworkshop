const { resolve } = require('path');

const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

const devmode = process.env.NODE_ENV !== 'production';

function getEntrySources(sources) {
  if (devmode) {
    sources.unshift('webpack-dev-server/client?http://0.0.0.0:8080');
  }

  return sources;
}

module.exports = {
  entry: getEntrySources(['babel-polyfill', './index.jsx']),

  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  context: resolve(__dirname, 'src'),

  devtool: !devmode ? 'source-map' : 'cheap-module-source-map',

  plugins,

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: { index: '/' },
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      rules.js,
    ],
  },

  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      app: resolve(__dirname, 'src/'),
    },
    extensions: ['.js'],
  },

  externals: {
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },

  performance: !devmode ? {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function filterAssets(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  } : {},
};
