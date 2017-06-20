// index.js

import Vue from 'vue'
import Vuex from 'vuex'
import {
  getlist,
  getTopic
} from './api.js'

Vue.use(Vuex)

export  function createStore() {
  return new Vuex.Store({
    
    state: {
      activeType:"",
      perpage:20,
      topics:[],
      cur:'',
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
      },
      FETCH_TOPIC: ({dispatch, commit, state}, {id}) => {
        return getTopic(id)
          .then( ({data}) => {
            commit('SET_TOPICS', data)
          } )
      }
    },
    mutations: {
       SET_ACTIVE_TYPE: (state, {type}) =>{
         state.activeType = type;
       },
       SET_LIST: (state, {data, success}) => {
         state.lists[state.activeType] = data
       },
       SET_TOPICS:(state, {data, success}) => {
        // console.log(data)
        // state.topics[data.id] = data  错错错
        Vue.set(state.topics, data.id, data)
        state.cur = data.id
       }
    },
    getters: {
      activeItems:(state) => {
        return state.lists[state.activeType]
      },
      acttt: (state) => {
        return state.topics[state.cur]
      }
    }
  })
}