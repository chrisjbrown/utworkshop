// transpile js w/ babel
exports.js = {
  test: /\.jsx?$/,
  loader: 'babel-loader',
};

exports.css = {
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
      }
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
      }
    }
  ]
};
