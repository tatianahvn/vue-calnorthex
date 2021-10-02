<template>
  <section class="presentation-services container--fluid" id="section-services">
    <div class="container">
      <v-row>
        <h1 class="font-title title-component"> WE OFFER A WIDE RANGE OF SERVICES</h1>
      </v-row>
      <p>
        From conception to completion, our entire team of estimators, designers, project managers and experienced executives make our clients’ needs a priority. We have experience in a wide variety of projects and delivery methods, and use both time-proven practices and cutting-edge techniques to make sure our customers’ projects meet their maximum potential.
      </p>
      <v-btn
        large
        outlined
        class="mt-8"
        
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
  background-color: #dcdcdc
  padding: 4rem 0 5rem

  .container 
    text-align: center

  .title-component 
    font-size: 1.8rem 
    color: #464646
    text-align: center
    z-index: 2
    letter-spacing: 5px
    margin: 2rem auto
  
  p 
    text-align: center
    width: 80% 
    margin: auto
    color: #464646
    font-size: 1.4rem
    @include laptop 
      width: 65% 
      font-size: 1.2rem


</style>