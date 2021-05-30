<template>
  <div class="home">
    <MainBanner/>
    <MainDescription/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner'
import MainDescription from '@/components/MainDescription'

export default {
  components: {
    MainBanner,
    MainDescription
  }
}
</script>
