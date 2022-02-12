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
        class="mt-8"
        to="/contact"
        
      >
        CONTACT US FOR A PROJECT QUOTE
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
  background-color: $soft-white
  padding: 2rem
  @include laptop
    padding: 4rem 0 5rem

  .container 
    text-align: center

  .title-component 
    font-size: 1.5rem
    letter-spacing: 0.18rem
    text-transform: uppercase
    line-height: 2rem
    color: $common-black
    text-align: center
    z-index: 1
    margin: 2rem auto
    @include laptop
      font-size: 2rem 
  
  p 
    width: 100% 
    margin: auto
    color: $common-black
    font-size: 1.4rem
    text-align: justify
    @include laptop 
      width: 65% 
      font-size: 1.5rem
      text-align: center


</style>