import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/'
import * as filters from './util/filter'


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
	store,
	router,
	render: h=> h(App)
})

app.$mount("#app");

