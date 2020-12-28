const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
