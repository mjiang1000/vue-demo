import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import * as filters from './util/filter'
import { sync } from 'vuex-router-sync'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export  function createApp() {
  const store = createStore()
  const router = createRouter()
  sync(store, router)
  const app = new Vue({
	store,
	router,
	render: h=> h(App)
  })
  
  return { app, router, store }
}