const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: {
	"ething": "./src/ething.js"
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
	library: "EThing",
	libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
        VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
