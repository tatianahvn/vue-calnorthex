<template>
  <section class="banner-we-love container--fluid">
    <div class="img-asset"></div>
    <div class="info-details">
      <div class="pt-md-6 d-flex flex-column flex-md-row justify-md-space-between align-center">
        <div class="pt-8 px-8 pa-md-0">
          <h1 class="font-title title-component mb-2"> WE LOVE WHAT WE DO...</h1>
          <p class="pt-5 pt-m-0 text-justify">
            No matter how to big or small your project is, Calnorthex Concrete offers you a solution
            and ideas to fulfill your needs. We want the journey of building your project to be pleasant. 

          </p>
        </div>
        <div>
          <v-btn
            large
            outlined
            dark
            class="my-8"
          >
            FREE QUOTE
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
  display: flex 
  flex-direction: column
  position: relative
  background-color: #232323
  height: 120vh
  @include laptop
    height: 100vh
  .img-asset 
    width: 100% 
    height: 55% 
    background-image: url('~@/assets/images/we-love-what-we-do.png')
    background-position: top right
    background-size: 226%

    @include laptop 
      height: 70% 
      background-position: 50% 15%
      background-size: 100%

  .title-component 
    font-size: 1.3rem 
    color: white
    letter-spacing: 3px
    @include laptop
      font-size: 1.8rem 
      

  .info-details 
    @include laptop
      height: 30% 
      padding: 2rem 3rem

  p 
    width: 100%
    max-width: 900px
    font-size: 1.25rem
    color: $white-80

</style>