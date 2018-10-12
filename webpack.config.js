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
	libraryTarget: "umd",
    globalObject: 'this'
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(process.env.npm_package_version),
    })
  ]
};
