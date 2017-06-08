const express = require('express')
const webpack = require('webpack');
const path = require('path')
const port = process.port || 8080
const webpackDevMidware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

const app = express();
app.use(express.static(path.resolve(__dirname, './dist')))
const compiler = webpack(config);
app.use(webpackDevMidware(compiler, {
	
}))

// app.get("*", (req, res) => {
// 	res.send(`get ${req.url}`)
// })

app.listen(port,() => {
	console.log(`server running on ${port}`)
})