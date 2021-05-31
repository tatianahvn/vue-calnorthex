<template>
  <div class="home">
    <MainBanner/>
    <MainDescription/>
    <MainServices/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner'
import MainDescription from '@/components/MainDescription'
import MainServices from '@/components/MainServices'

export default {
  components: {
    MainBanner,
    MainDescription,
    MainServices
  }
}
</script>
