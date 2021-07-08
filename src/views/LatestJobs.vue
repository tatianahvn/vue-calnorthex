<template>
  <div class="container--fluid pageLatestJobs">
    <div class="latestJobs-wrap container">
      <v-row>
        <h1 class="font-title title-component">LATEST JOBS</h1>
      </v-row>
      <v-row>
        {{ detailsJob }}
      </v-row>
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
  }
}
</script>

<style lang="sass" scoped>

</style>