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
      { title: 'Driveway', location: 'Coronado, CA', src: 'gallery-5.jpg' },
      { title: 'Driveway', location: 'Coronado, CA', src: 'gallery-1.jpg' },
      { title: 'Driveway', location: 'Coronado, CA', src: 'gallery-2.jpg' },
      { title: 'Driveway', location: 'Coronado, CA', src: 'gallery-3.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'gallery-7.jpg' }, 
      { title: 'Driveway', location: 'Coronado, CA', src: 'gallery-6.jpg' }, 
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