// index.js

import Vue from 'vue'
import Vuex from 'vuex'
import {
  getlist,
  getTopic
} from './api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	activeType:"",
  	perpage:20,
  	lists:{
      all:[],
      top:[],
      share:[],
      ask:[],
      job:[]
  	}
  },
  actions: {
    FETCH_ITEMS: ({dispatch, commit, state}, {type,page}) => {
      commit('SET_ACTIVE_TYPE', {type})
      return getlist(type, page )
         .then( ({data}) =>{ 
          commit('SET_ACTIVE_TYPE',type)
          commit('SET_LIST',data)
        })
    }
  },
  mutations: {
     SET_ACTIVE_TYPE: (state, {type}) =>{
       state.activeType = type;
     },
     SET_LIST: (state, {data}) => {
       state.lists[state.activeType] = data
     }
  },
  getters: {
  	activeItems:(state) => {
      return state.lists[state.activeType]
    }
  }
})

export default store