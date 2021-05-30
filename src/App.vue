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
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
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
  data () {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      activeSidebar: false,
      title: 'Qué ver',
      //logoCinepolis: require('~/assets/images/lg-cinepolis-new.png'),
      items: [
          { title: 'Home', id: '#home' },
          { title: 'Gallery', id: '#gallery' },
          { title: 'Services', id: '#services' },
					{ title: 'About us', id: '#about' },
					{ title: 'Contact', id: '#contact' }
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


