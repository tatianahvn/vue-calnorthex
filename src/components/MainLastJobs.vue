<template>
  <div class="container--fluid latestJobs">
    <div class="latestJobs-wrap container">
      <v-row>
        <h1 class="font-title title-component">LATEST JOBS</h1>
      </v-row>
      <v-row>
        <v-col cols="4"
          v-for="job in latestJobs"
          :key="job"
        >
          <AnimatedCard :info="job"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import AnimatedCard from '@/components/Cards/animated-card'

export default {
  components: {
    AnimatedCard
  },
  data: () => ({
    reveal: false,
    latestJobs: [
      { title: 'Driveway', description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', image: 'B2.jpg' },
      { title: 'Driveway', description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', image: 'B2.jpg' },
      { title: 'Driveway', description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', image: 'B2.jpg' },
    ]
  }),

}
</script>
