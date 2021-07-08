import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'


//import router from './routes'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Vuex,
  store,


  //router,
  render: h => h(App)
}).$mount('#app')
