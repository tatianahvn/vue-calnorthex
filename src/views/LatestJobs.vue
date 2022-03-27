<template>
  <div class="container--fluid pageLatestJobs">
    <div class="latestJobs-wrap">
      <div class="first-section d-flex flex-column flex-md-row">
        <v-col cols="12" md="5" class="pa-0">
            <v-img class="latestJob-photo" :src="require(`@/assets/images/gallery/${detailsJob.image}`)"></v-img>
        </v-col>
        <v-col cols="12" md="5" class="main-description mx-auto pa-3 pa-md-8 my-8">
          <h1 class="font-title title-component text-center pt-5 pt-md-15">{{detailsJob.title}}</h1>
          <p class="description-component">{{ detailsJob.fullDescription[0].textContent }}</p>
        </v-col>
      </div>
      <div class="second-section">
        <v-col class="py-15">
          <h1 class="font-title title-component text-center">Our method</h1>
          <p class="pt-8 second-pagraph">{{ detailsJob.fullDescription[1].textContent }}</p>
        </v-col>
      </div>
      <div class="pictures-section d-flex flex-column flex-md-row">
        <v-col cols="12" md="4"
          v-for="(picture, index) in detailsJob.pictures"
          :key="index"
        >
          <v-img aspect-ratio="1" class="fase-pictures" :src="require(`@/assets/images/gallery/${picture.src}`)"></v-img>
        </v-col>
      </div>
      <MainSliderProjects class="mb-10 mb-md-auto"/>
    </div>
  </div>
</template>

<script> 
import MainSliderProjects from '@/components/MainSliderProjects'

export default {
  name: 'LatestJobs',
  components: {
    MainSliderProjects
  },
  computed: {
    detailsJob(){
        return this.$store.state.detailsJob
    },
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="sass" scoped>
.pageLatestJobs
  margin-top: 80px
  @include laptop
    margin-top: 84px
  .title-component
    font-size: 2rem 
    text-transform: uppercase
    letter-spacing: 10px
    color: $dark-gray
  .description-component
    width: 85%  
    padding-top: 30px
  .latestJob-photo
    height: 70vh
    max-height: 500px
    @include laptop
      height: 87vh
      max-height: 750px
  .main-description
    display: flex 
    flex-direction: column 
    justify-content: center 
    align-items: center
    background-color: #f9f9f9
  p
    font-size: 1.2rem
    color: #666
    text-align: justify
    @include laptop
      font-size: 1.5rem
      line-height: 2rem
  p.second-pagraph
    width: 80% 
    margin: auto
    text-align: center
    color: $white-80
  .second-section
    background-color: $soft-black
    .title-component
      color: white
  .pictures-section
    background-color: $soft-black
    .fase-pictures 
      max-height: 450px
      filter: grayscale(100%) contrast(110%) brightness(90%)
      transition: all .3s
      &:hover 
        filter: grayscale(0%) saturate(125%)
  
</style>