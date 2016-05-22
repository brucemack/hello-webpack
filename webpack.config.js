var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      app: "./app/main.js"
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
    ]
};
