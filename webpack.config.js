var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle-min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
		new webpack.optimize.UglifyJsPlugin({//引入插件
			compress: {
				warnings: false
			}
		})
  ]
};