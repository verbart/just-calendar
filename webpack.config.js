const webpack = require('webpack');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: { presets: ['es2015'] },
      exclude: [/node_modules/]
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT: JSON.stringify(isDevelopment)
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};

if (!isDevelopment) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: false,
      compress: true,
      comments: false,
      drop_console: true,
      warnings: false,
      unsafe: true
    })
  );
}
