<template>
  <div class="home">
    <MainBanner/>
    <MainDescription/>
    <ServicesPresentation/>
    <MainServices/>
    <MainLastJobs/>
    <BannerWeLove/>
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
import BannerWeLove from '@/components/BannerWeLove'


export default {
  components: {
    MainBanner,
    MainDescription,
    MainServices,
    ServicesPresentation,
    MainLastJobs,
    MainGallery,
    BannerWeLove
  }
}
</script>
