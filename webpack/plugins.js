const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const childProcess = require('child_process');

const production = process.env.NODE_ENV === 'production';

// plugins used in dev and prod
const basePlugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: 'body',
  }),
];

// dev only plugins
const devPlugins = [
  new webpack.NamedModulesPlugin(),
];

// prod only plugins
const prodPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: ({ resource }) => /node_modules/.test(resource),
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    compress: {
      drop_console: true,
      warnings: true,
      screw_ie8: true, // React doesn't support IE8
      unused: true,
      dead_code: true,
    },
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
  })
];

// export plugins depending on environment mode dev or prod
module.exports = basePlugins
.concat(production ? prodPlugins : [])
.concat(!production ? devPlugins : []);
