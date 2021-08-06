<template>
  <div class="container--fluid pageLatestJobs">
    <div class="latestJobs-wrap container">
      <v-row no-gutters class="first-section">
        <v-col cols="5">
            <v-img class="latestJob-photo" :src="require(`@/assets/images/gallery/${detailsJob.image}`)"></v-img>
        </v-col>
        <v-col cols="7" class="main-description pa-8">
          <h1 class="font-title title-component text-center">{{detailsJob.title}}</h1>
          <p class="pt-8">{{ detailsJob.fullDescription[0].textContent }}</p>
        </v-col>
      </v-row>
      <v-row class="second-section" no-gutters>
        <v-col class="py-8">
          <h1 class="font-title title-component text-center">Our method</h1>
          <p class="pt-8 second-pagraph">{{ detailsJob.fullDescription[1].textContent }}</p>
        </v-col>
      </v-row>
      <v-row class="pictures-section" no-gutters>
        <v-col cols="4"
          v-for="(picture, index) in detailsJob.pictures"
          :key="index"
        >
          <v-img aspect-ratio="1" class="fase-pictures" :src="require(`@/assets/images/gallery/${picture.src}`)"></v-img>
        </v-col>
      </v-row>
      <MainLastJobs/>
    </div>
  </div>
</template>

<script> 
import MainLastJobs from '@/components/MainLastJobs'

export default {
  name: 'LatestJobs',
  components: {
    MainLastJobs
  },
  computed: {
    detailsJob(){
        return this.$store.state.detailsJob
    },
  }
}
</script>

<style lang="sass" scoped>
.pageLatestJobs
  .title-component
    font-size: 2rem 
    text-transform: uppercase
    letter-spacing: 10px
    color: $dark-gray
  .latestJob-photo
    height: 87vh
    max-height: 750px
  .main-description
    background-color: #f9f9f9
  p
    font-size: 1.2rem
    color: #666
    text-align: justify
  p.second-pagraph
    width: 80% 
    margin: auto
    text-align: center
  .second-section
    background-color: #e8d2d3
  .pictures-section
    background-color: #e8d2d3
    .fase-pictures 
      max-height: 450px
      filter: grayscale(100%) contrast(110%) brightness(90%)
      transition: all .3s
      &:hover 
        filter: grayscale(0%) saturate(125%)
  
</style>