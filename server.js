const express = require('express')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const port = process.port || 8080
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer') 
const app = express();

const isProd = process.env.NODE_ENV === 'production'
const template = fs.readFileSync(resolve('./src/index.html'), 'utf-8')
function createRenderer(bundle, option) {
  return createBundleRenderer(bundle, Object.assign({
  	template,
  	basedir: resolve('./dist'),
  	runInNewContext: false
  }))
}

let renderer 
let readPromise

if (isProd) {
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')

  renderer = createRenderer(bundle, {
  	clientManifest
  })
} else {
  readPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}
app.use(express.static(path.resolve(__dirname, './dist')))


function render (req, res) {
  const s = Date.now()
  res.setHeader('Content-Type', "text/html")

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).end('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
  	title: 'vue构建cnode社区',
  	url: req.url
  }

  renderer.renderToString(context, (err, html) => {
  	if (err) {
  	  return handleError(err)
  	}
  	res.end(html)

  })
}

app.get('*', render)

app.listen(port,() => {
	console.log(`server running on ${port}`)
})