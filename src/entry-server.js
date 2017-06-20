import { createApp } from './app'
const isDev = process.env.NODE_ENV !== 'production'

export default context =>  {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app, store, router } = createApp()
    const { url } = context
    const fullPath = router.resolve(url).route.fullPath
    if (fullPath !== url) {
      reject({url: fullPath})
    }
    
    
    router.push(url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      Promise.all(matchedComponents.map( ({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      })) ).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
      
    }, reject)
      
  })
}