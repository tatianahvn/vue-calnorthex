<template>
  <section class="container--fluid gallery">
    <div class="gallery-wrap container">
      <v-row>
        <h1 class="font-title title-component">GALLERY</h1>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-row>
            <v-col cols="6" class="pa-0 pr-3">
              <v-img class="photo" height="350px" :src="require(`@/assets/images/gallery/D1.jpg`)"></v-img>
            </v-col>
            <v-col cols="6" class="pa-0 pl-3">
              <v-img  class="photo" height="350px" :src="require(`@/assets/images/gallery/G5.jpg`)"></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3"><v-img class="photo" height="350px" :src="require(`@/assets/images/gallery/B2.jpg`)"></v-img></v-col>
        <v-col cols="3"><v-img class="photo" height="350px" :src="require(`@/assets/images/gallery/G6.jpg`)"></v-img></v-col>
        <v-col cols="3"><v-img class="photo" height="350px" :src="require(`@/assets/images/gallery/H12.jpg`)"></v-img></v-col>
        <v-col cols="3"><v-img class="photo" height="350px" :src="require(`@/assets/images/gallery/E3.jpg`)"></v-img></v-col>
        <v-col cols="3"><v-img class="photo" height="350px" :src="require(`@/assets/images/gallery/B3.jpg`)"></v-img></v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.gallery
  background-color: $dark-black
  .title-component 
    font-size: 1.8rem 
    color: white
    text-align: center
    z-index: 2
    letter-spacing: 5px
    margin: 2rem auto
  .photo
    opacity: .7
    &:hover 
      opacity: 1

</style>