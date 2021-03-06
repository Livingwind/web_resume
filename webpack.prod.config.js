const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client/entry.jsx'
  ],
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new CopyWebpackPlugin([
      {from: 'public'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/, loader: 'babel-loader',
        include: path.join(__dirname, 'src/client'),
      },
      { test: /\.json$/, loader: 'file-loader', options: { name: 'pages/[name].[ext]' }},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: { name: '[path][name]-[hash:8].[ext]' }},
    ]
  }
}
