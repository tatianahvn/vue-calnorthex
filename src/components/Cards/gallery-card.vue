<template>
  <v-card
    class="photo-card rounded-3 elevation-0 ma-0 ma-md-3"
  >
    <!--
      A native <img> rather than <v-img>: Vuetify paints the photo as the
      background-image of a div, which search engines cannot index. These are
      the only project photos on the site, so they are worth surfacing in
      image search. The caption is not displayed, but it still describes the
      photo through the alt text.
    -->
    <img
      class="photo"
      loading="lazy"
      :src="require(`@/assets/images/gallery/${item.src}`)"
      :alt="`${item.title} in ${item.location} by Calnorthex Concrete`">
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
  }
}
</script>

<style lang="sass" scoped>
  .photo-card
    overflow: hidden
    cursor: default
    box-shadow: 2px 4px 12px rgba(0,0,0,.4)!important

    .photo
      display: block
      width: 100%
      height: 87vw
      object-fit: cover
      transition: transform .6s ease
      @include laptop
        height: 28vw

    &:hover .photo
      transform: scale(1.08)

</style>
