const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
  	path: path.resolve(__dirname, './dist'),
  	filename: '[name].js',
  	chunkFilename:'[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
  	loaders:[
  	  {
  	  	test: /\.vue$/,
  	  	loader: 'vue-loader'
  	  },
  	  {
  	  	test: /\.js$/,
  	  	exclude: /node_modules/,
  	  	use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            "plugins": ["syntax-dynamic-import"]
          }
        }
  	  	
  	  },

  	]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      inject: true
    })
  ]
}