<template>
  <div class="home">
    <MainBanner/>
    <MainDescription/>
    <ServicesPresentation/>
    <MainServices/>
    <MainLastJobs/>
    <MainGallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner'
import MainDescription from '@/components/MainDescription'
import MainServices from '@/components/MainServices'
import MainGallery from '@/components/MainGallery'
import MainLastJobs from '@/components/MainLastJobs'
import ServicesPresentation from '@/components/ServicesPresentation'


export default {
  components: {
    MainBanner,
    MainDescription,
    MainServices,
    ServicesPresentation,
    MainLastJobs,
    MainGallery
  }
}
</script>
