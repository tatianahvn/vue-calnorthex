<template>
  <div id="app">
    <v-app dark>
      <HeaderV2 :nav-items="items" @handlerSidebar="showSidebar()"/>
      <Sidebar :nav-items="items" :showSidebar="activeSidebar" @close="closeSidebar"/>

      <v-main class="pa-0">
        <router-view/>
      </v-main>
    <Footer :nav-items="items"/>

    </v-app>
  </div>
</template>
<script>

import HeaderV2 from '@/components/Header/Header-v2'
import Sidebar from '@/components/Header/Sidebar'
import Footer from '@/components/Footer'

export default {
  components: {
    HeaderV2,
    Sidebar,
    Footer
  },
  head:{
    link: [
      { rel: 'stylesheet', href: 'myProjects/webProject/icofont/css/icofont.min.css' },
    ]
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
					{ title: 'Projects', id: 'jobs', type: 'url' },
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


