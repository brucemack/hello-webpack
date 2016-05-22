var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      app: "./app/main.es6"
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [
      // This is a plugin that will perform copies
      new CopyWebpackPlugin([
        // Our local HTML
        { from: 'app/index.html' },
        // The Bootstrap installed via NPM
        { from: 'node_modules/bootstrap/dist', to: 'assets/bootstrap' },
        // The jQuery installed via NPM
        { from: 'node_modules/jquery/dist', to: 'assets/jquery' }
      ])
    ],
    module: {
      loaders: [
        // This loader performs the transpilation from ES6 (with React
        // extensions) to a normal .JS
        {
          test: /\.es6?$/,
          exclude: /(node_modules|bower_components|dist)/,
          loader: 'babel-loader',
          query: {
            presets: [ 'es2015', 'react' ]
          }
        }
      ]
    }
};
