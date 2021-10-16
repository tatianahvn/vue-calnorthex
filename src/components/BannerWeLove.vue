<template>
  <section class="banner-we-love container--fluid">
    <div class="container">
      <v-row justify="space-between">
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
            class="mt-8"
          >
            LEAR MORE
          </v-btn>
        </div>
      </v-row>
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
  padding: 4rem 0

  .title-component 
    font-size: 1.8rem 
    color: white
    letter-spacing: 5px
  
  p 
    width: 100%
    font-size: 1.25rem
    color: #777777
    

</style>