<template>
  <div class="home">
    <MainBanner/>
    <MainDescription/>
    <MainServices/>
    <MainGallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner'
import MainDescription from '@/components/MainDescription'
import MainServices from '@/components/MainServices'
import MainGallery from '@/components/MainGallery'


export default {
  components: {
    MainBanner,
    MainDescription,
    MainServices,
    MainGallery
  }
}
</script>
