<template>
  <div class="container--fluid pageLatestJobs">
    <div class="latestJobs-wrap container">
      <v-row>
        <h1 class="font-title title-component">LATEST JOBS</h1>
      </v-row>
      <v-row>
        {{ latestJob }}
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['latestJob'])
  }
}
</script>

<style lang="sass" scoped>

</style>