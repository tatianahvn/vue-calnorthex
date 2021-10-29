<template>
  <v-card 
    class="photo-card rounded-3 elevation-0 ma-3"
    @mouseenter="activeCard = true"
    @mouseleave="activeCard = false"
  >
    <v-img 
      class="photo" 
      height="40vh"
      min-height="450px"
      :src="require(`@/assets/images/gallery/${item.src}`)">
    </v-img>
    <div class="layout" v-if="activeCard" transition="fade-transition">
      <p class="title-card mb-0">{{ item.title }}</p>
      <p class="subtitle-card">{{ item.location }}</p>
    </div>
  </v-card>
</template>

<script>

export default {
  props:{
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data(){
    return{
      activeCard: false
    }
  }
}
</script>

<style lang="sass" scoped>
  .photo-card
    position: relative
    cursor: default
    box-shadow: 2px 4px 12px rgba(0,0,0,.4)!important
    .layout
      position: absolute 
      top: 0
      left: 0
      width: 100% 
      height: 100% 
      display: flex 
      flex-direction: column
      justify-content: center 
      align-items: center
      z-index: 1
      opacity: 0
      animation-name: overlay
      animation-duration: 1.5s
      animation-fill-mode: forwards

      .title-card 
        font-size: 1.5rem 
        text-align: center 
        color: white
        letter-spacing: 5px
        text-transform: uppercase
      .subtitle-card
        font-size: .8rem 
        text-align: center 
        color: white
        text-transform: uppercase

  @keyframes overlay
    0%, 50%
      opacity: 0
      background-color: rgba(0, 0, 0, .5)
    50%, 100%
      opacity: 1
      background-color: rgba(0, 0, 0, .5)
</style>