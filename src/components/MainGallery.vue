<template>
  <section class="container--fluid gallery" id="section-gallery">
    <div class="gallery-wrap py-10">
      <div class="d-flex flex-column justify-center align-center">
        <p class="font-title header-title mx-auto py-10">GALLERY</p>
      </div>
      <v-row>
        <v-col 
          :cols="windowSize.x < 960 ? '12' : '4'"
          v-for="(item, index) in galleryItems"
          :key="index"
        >
          <GalleryCard :item="item"/>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>

import GalleryCard from './Cards/gallery-card.vue'
export default {
  components: { GalleryCard },

  mounted(){
    this.onResize()
  },

  data:() =>  ({
    galleryItems: [
      { title: 'Driveway', location: 'Coronado, CA', src: 'C8.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'A1.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'E3.jpg' }, 

      { title: 'Driveway', location: 'Coronado, CA', src: 'G5.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'G6.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'H12.jpg' }, 

      { title: 'Driveway', location: 'Coronado, CA', src: 'D1.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'B2.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'B3.jpg' }, 
    ],

    windowSize: {
      x: 0,
      y: 0
    }
  }),
    
  methods: {
		onResize(){
			this.windowSize = { x: window.innerWidth, y: window.innerHeight }
		}
	}
}

</script>

<style lang="sass" scoped>
.gallery
  background-color: white
  .header-min
    font-size: 1rem
    text-transform: uppercase
    letter-spacing: 5px
    color: black
  .header-title
    font-size: 2.5rem
    letter-spacing: 5px
    font-weight: 500
  
</style>