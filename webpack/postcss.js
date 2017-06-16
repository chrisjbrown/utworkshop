const postcssImport = require('postcss-import');
const postcssCSSNext = require('postcss-cssnext');
const cssNano = require('cssnano');

const postcssBasePlugins = [
  postcssImport,
  postcssCSSNext,
];
const postcssDevPlugins = [];
const postcssProdPlugins = [
  cssNano({
    safe: true,
    sourcemap: true,
    autoprefixer: false,
  }),
];

const postcssPlugins = postcssBasePlugins
.concat(process.env.NODE_ENV === 'production' ? postcssProdPlugins : [])
.concat(process.env.NODE_ENV === 'development' ? postcssDevPlugins : []);

module.exports = () => postcssPlugins;
