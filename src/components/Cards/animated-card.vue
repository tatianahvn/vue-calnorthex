<template>
  <v-card 
    class="latestJobs-card"
    @mouseenter="reveal = true" 
    @mouseleave="reveal = false"
  >
    <v-img class="latestJob-photo" :src="require(`@/assets/images/gallery/B2.jpg`)">
    </v-img>
    <v-expand-transition>
      <v-card 
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 txt-white">
            {{ info.title }}
          </p>
          <p class="txt-white">
            {{ info.description }}
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props:{
    info: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data(){
    return{
      reveal: false
    }
  }
}
</script>

<style lang="sass" scoped>
  .latestJobs-card
    &:hover::before
      content: ''
      position: absolute 
      width: 100% 
      height: 100% 
      background: rgb(2,0,36)
      background: linear-gradient(0deg, rgba(2,0,36,0.5228466386554622) 0%, rgba(9,9,121,0.48923319327731096) 35%, rgba(0,212,255,0.49763655462184875) 100%)
      z-index: 2

  .v-card--reveal 
    bottom: 0
    opacity: 1
    position: absolute
    width: 100%
    height: 50%
    background-color: transparent!important
    box-shadow: none!important
    z-index: 3

  .txt-white
    color: white
</style>