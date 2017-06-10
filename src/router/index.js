import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// https://cn.vuejs.org/v2/guide/render-function.html#函数化组件
// const createListView = id => () => import('../view/CreateList').then(m => {
  
//   console.log(id)
//   return m.default(id)
// })
const topicView = () => import('../view/TopicView.vue')
// import topicView from '../view/TopicView.vue'
import createListView from '../view/CreateList'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/all/:page(\\d+)?', component: createListView('all') },
    { path: '/good/:page(\\d+)?', component: createListView('good') },
    { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    { path: '/share/:page(\\d+)?', component: createListView('share') },
    { path: '/job/:page(\\d+)?', component: createListView('job') },
    { path: '/topic/:id', component: topicView },
    { path: '/', redirect: '/all' }
  ]
})

export default router

