<template>
  <section class="presentation-services container--fluid" id="section-services">
    <div class="container">
      <v-row>
        <h1 class="font-title title-component"> WE OFFER A WIDE RANGE OF SERVICES</h1>
      </v-row>
      <p>
        Calnorthex Concrete provides a wide range of concrete services for residential clients in Sonoma and Napa Counties. Our company has the training and equipment to install everything from sidewalks and driveways to patios and pool decks, and it’s also qualified to handle related work like grading and drainage.
      </p>
      <v-btn
        large
        outlined
        dark
        class="mt-8"
        to="/contact"
      >
        CONTACT US
      </v-btn>
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
.presentation-services 
  position: relative
  background-color: #0c0c0c
  padding: 2rem 15px
  @include laptop
    padding: 4rem 0 5rem

  .container 
    text-align: center

  .title-component 
    font-size: 1.5rem
    font-weight: 500
    text-transform: uppercase
    line-height: 2rem
    color: white
    text-align: center
    z-index: 1
    margin: 2rem auto
    @include laptop
      font-size: 2rem 
  
  p 
    width: 100% 
    margin: auto
    color: $white-80
    font-size: 1.25rem
    text-align: justify
    @include laptop 
      width: 70% 
      font-size: 1.25rem
      text-align: center


</style>