const path = require('path');
const webpack = require('webpack');

const dev_port = 8080;

module.exports = {
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    contentBase: './public',
    port: dev_port,
    publicPath: '/',
    contentBase: './public',
    open: true,
    hot: true
  },
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/client/entry.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)/, loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      { test: /\.json$/, loader: 'file-loader', options: { name: 'pages/[name].[ext]' }},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: { name: 'images/[name]-[hash:8].[ext]' }}
    ]
  }
}
