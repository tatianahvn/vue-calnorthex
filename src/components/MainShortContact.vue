<template>
  <section class="main-short-contact container--fluid">
    <div class="container d-flex">
      <v-col>
        <h1 class="font-title title-component">Ask for your free quote</h1>
      </v-col>
      <v-col>
        <h1 class="font-title title-component">(707) 490-7975</h1>
      </v-col>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'main-short-contact',
    data(){
      return{}
    }
  }
</script>

<style lang="sass" scoped>
.main-short-contact
  position: relative
  background-color: $base-red

  .title-component 
    font-size: 1.5rem
    font-weight: 500
    letter-spacing: 0.18rem
    text-transform: uppercase
    line-height: 2rem
    color: white
    text-align: center
    z-index: 1
    @include laptop
      font-size: 1.5rem 


</style>