<template>
  <div class="container--fluid pageContact mt-15">
    <div class="page-wrap">
      <v-row no-gutters class="first-section">
        <v-col cols="6">
            <v-img class="latestJob-photo" :src="require(`@/assets/images/gallery/C2.jpg`)"></v-img>
        </v-col>
        <v-col cols="6" class="main-description pa-8">
          <h1 class="font-title title-component text-center">CONTACT INFO</h1>
          <div class="separator"></div>
          <p class="pt-2">Phone: (707) 490-7975 </p>
          <p>Email: <a href="mailto:calnorthex@gmail.com">calnorthex@gmail.com </a></p>
          <p class="pt-2 txt-bold">HOURS OF OPERATION </p>
          <p class="txt-center">Monday to friday: 8:00 AM to 6:00 PM <br>
              Saturday: only by appoiment 
          </p>
          <p class="pt-2 txt-center">Santa Rosa, CA</p>
          <div class="separator"></div>
        </v-col>
      </v-row>
      <!--
      <v-row class="pictures-section" no-gutters>
        <v-col cols="4"
          v-for="(picture, index) in detailsJob.pictures"
          :key="index"
        >
          <v-img aspect-ratio="1" class="fase-pictures" :src="require(`@/assets/images/gallery/${picture.src}`)"></v-img>
        </v-col>
      </v-row>
      -->
    </div>
  </div>
</template>

<script> 

export default {
  name: 'LatestJobs',
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
.pageContact
  .title-component
    font-size: 2rem 
    text-transform: uppercase
    letter-spacing: 10px
    color: $dark-gray
  .latestJob-photo
    height: 87vh
    max-height: 750px
    filter: grayscale(100%) contrast(120%) brightness(80%)

  .main-description
    display: flex 
    flex-direction: column 
    align-items: center 
    justify-content: center
    background-color: #f9f9f9
  p
    font-size: 1.2rem
    color: #666
    text-align: justify
  p.second-pagraph
    width: 80% 
    margin: auto
    text-align: center
  a 
    text-decoration: none
    color: $base-red
  .txt-center
    text-align: center
  .txt-bold
    font-weight: bold
  .separator
    width: 80%
    margin-top: 1rem
    height: 10px
    border-top: 2px solid #dbdbdb

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