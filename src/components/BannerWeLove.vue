<template>
  <section class="banner-we-love container--fluid">
    <v-img class="img-asset" :src="require(`@/assets/images/gallery/H18.jpg`)"/>
    <div class="container">
      <div class="pt-15 d-flex flex-column flex-md-row justify-md-space-between align-center">
        <div>
          <h1 class="font-title title-component mb-2"> WE LOVE WHAT WE DO...</h1>
          <p>
            We want the journey of building your dreams to be rewarding.<br>
            This shapes our values and the way we do business.
          </p>
        </div>
        <div>
          <v-btn
            large
            outlined
            dark
            class="my-8"
          >
            LEAR MORE
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Description',
    data(){
      return{}
    }
  }
</script>

<style lang="sass" scoped>
.banner-we-love
  position: relative
  background-color: #232323
  margin-top: 60px
  @include laptop
    padding: 0 0 4rem

  .title-component 
    font-size: 1.3rem 
    color: white
    letter-spacing: 5px
    padding: 0 2rem
    @include laptop
      font-size: 1.8rem 
      padding: 0 
  
  p 
    width: 100%
    font-size: 1.25rem
    color: #777777
    padding: 0 2rem
    @include laptop
      padding: 0

  .img-asset
    height: 400px
    filter: grayscale(1) brightness(0.8)
    @include laptop
      height: 600px
    
    

</style>