<template>
  <div id="app">
    <v-app dark>
      <Header :nav-items="items" @handlerSidebar="showSidebar()"/>
      <Sidebar :nav-items="items" :showSidebar="activeSidebar" @close="closeSidebar"/>

      <v-main class="pa-0">
        <router-view/>
      </v-main>
    <Footer :nav-items="items"/>

    </v-app>
  </div>
</template>
<script>

import Header from '@/components/Header/Header'
import Sidebar from '@/components/Header/Sidebar'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Sidebar,
    Footer
  },
  // Fallback for routes that do not define their own metaInfo. Every view
  // overrides this through pageMeta() in @/seo.
  metaInfo: {
    title: 'Concrete Contractor in Santa Rosa, CA | Calnorthex Concrete'
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      activeSidebar: false,
      title: 'Qué ver',
      items: [
          { title: 'Home', id: 'section-main', type: 'scroll' },
          { title: 'Services', id: 'section-services', type: 'scroll' },
          { title: 'Gallery', id: 'section-gallery', type: 'scroll' },
					{ title: 'Contact', id: 'contact', type: 'url'}
      ],
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },

  mounted(){
    this.onResize
    //document.title = "Calnorthex Concrete"
  },
  methods:{
      onResize() {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
      scrollToSection(elID){
        document.getElementById(`${elID}`).scrollIntoView({ behavior: 'smooth'})
      },
      goHome(){
        this.$router.push('/')
      },
      showSidebar(){
        this.activeSidebar = !this.activeSidebar
      },
      closeSidebar(){
        this.activeSidebar = false
      }
  }
}
</script>


