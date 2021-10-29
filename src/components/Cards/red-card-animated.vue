<template>
  <v-card 
    class="redCard-card rounded-0"
    @mouseenter="reveal = true" 
    @mouseleave="reveal = false"
  >
    <v-img class="redCard-photo" :src="require(`@/assets/images/gallery/${info.image}`)">
    </v-img>
    <v-expand-transition>
      <v-card 
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
      >
        <v-card-text class="pa-0">
          <p class="text-h5 txt-white txt-center">
            {{ info.title }}
          </p>
          <!-- Description disabled 
          <p class="txt-white">
            {{ info.description }}
          </p> -->
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            outlined
            color="white"
            class="mx-auto"
            @click="openPageProject()"
          >
            Show more
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
  name: 'RedCardAnimated',
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
  },
  methods:{
    openPageProject(){
      /* 
        Note: Inside of a Vue instance, you have access to the router instance as $router. You can therefore call this.$router.push.
      */
      window.scrollTo(0, top)
      this.$router.push({
        path: '/jobs'
      })

      this.$store.commit('setDetails', this.info)

    }
  }
}
</script>

<style lang="sass" scoped>
  .redCard-photo
    height: 50vh
    @include laptop
      height: 100%
      transition: all .3s
    
  .redCard-card
    height: 380px
    width: 100%
    &:hover::before
      content: ''
      position: absolute 
      width: 100% 
      height: 100% 
      z-index: 1

  .v-card--reveal 
    position: absolute
    top: 0
    width: 100%
    height: 100%
    background-color: $base-red!important
    box-shadow: none!important
    z-index: 1
  .v-card
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    align-content: center
    height: 100%
  .v-card__text
    p 
      text-align: center
  .txt-white
    color: white
</style>