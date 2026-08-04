import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMeta)

// The served index.html ships static SEO tags so that social scrapers, which do
// not run JavaScript, still get a title, description and preview image. Once the
// app boots, vue-meta takes over with per-route metadata, so the static copies
// are dropped first to avoid two descriptions or two canonicals in the document.
document
  .querySelectorAll('head [data-static-seo]')
  .forEach(tag => tag.remove())

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
