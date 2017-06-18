import { createApp } from './app'
const isDev = process.env.NODE_ENV !== 'production'

export default context => {
  return new Promise((resolve, reject) => {
  	const s = isDev && Date.now()
    const { app, router, store } = createApp()

    const { url } = context
    const fullPath = router.resolve(url).route.fullPath
    console.log(fullPath)
    console.log(url)
    // if (fullPath !== url) {
    //   console.err(url+)
    //   reject({ url: fullPath })
    // }
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // resolve(app)
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)

  })
}