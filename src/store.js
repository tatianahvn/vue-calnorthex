import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    detailsJob: {},
  },
  mutations: {
    setDetails(state, info) {
      state.detailsJob = info
  },
  },
  actions:{
    
  }
})