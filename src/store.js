import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    // Set before navigating home so the Home view knows which section to scroll
    // to once it has mounted.
    redirectMode: {
      scrollingActive : false,
      sectionID: null,
    }
  },
  mutations: {
    setRedirectMode(state, obj){
      state.redirectMode = obj
    }
  },
  actions:{

  }
})
