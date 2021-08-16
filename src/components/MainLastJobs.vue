<template>
  <div class="container--fluid latestJobs">
    <div class="latestJobs-wrap container">
      <div class="d-flex flex-column my-10 justify-center align-center">
        <p class="header-min pb-0">OUT PORTFOLIO</p>
        <p class="font-title header-title mb-5">PROJECTS</p>
        <p class="text-center">Since 1989, Sweenor Builders has built beautiful legacy homes in coastal Rhode Island. <br>Our portfolio features collaborations with Southern New England’s leading architects<br> and a range of in-house design/build and interior design services.</p>
      </div>
      <v-row>
        <v-col cols="3"
          v-for="(job, index) in latestJobs"
          :key="index"
        >
          <RedCardAnimated :info="job"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import RedCardAnimated from '@/components/Cards/red-card-animated'

export default {
  components: {
    RedCardAnimated
  },
  data: () => ({
    reveal: false,
    latestJobs: [
      { 
        title: 'Garden walkway',
        description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', 
        image: 'A2.jpg', 
        pictures: [
          { name: 'fase1', src: 'A.jpg' },
          { name: 'fase2', src: 'A1.jpg' },
          { name: 'fase3', src: 'A2.jpg' },
        ],
        fullDescription: [
          { pagraph: 'main', textContent: 'With an area of just over 46 square meters, the house is required to guarantee essential and necessary functions of a home for a young couple about to get married, however are limited in terms of extremely tight budget, and time of construction as short as possible, especially in the future it can be easily renovated and replaced when the economy is stable and life-changing is needed. Over many plans in place, the architects finally find the most optimal plan. For more than 70 years, Construct story has always been about innovation. In 1885 we began testing and certifying grain cargoes before they were put to sea, and in 1888 we pioneered the idea of independent testing laboratories. Then in 1896, the greatest inventor of them all became part of our story.'},
          { pagraph: 'fase1', textContent: 'With a design perspective of linking living space to natural, atrium space plays the central role of the house, which is the convergence of the sun, wind and trees, of all factors that contribute to a healthy life, which has always been purified. Entering the house, the entire public space is arranged smoothly and airy, with a garage, living room, kitchen and dining room splited in a conventional way, which creates the feeling that the house is really large and comfortable. On the other hand, the recycling of some details from the old house is both the way to keep back memories and the way to save.'}
        ]
      },
      { 
        title: 'Walkway & Kyosko', 
        description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', 
        image: 'H15.jpg', 
        pictures: [
          { name: 'fase1', src: 'H6.jpg' },
          { name: 'fase2', src: 'H12.jpg' },
          { name: 'fase3', src: 'H18.jpg' },
        ],
        fullDescription: [
          { pagraph: 'main', textContent: 'With an area of just over 46 square meters, the house is required to guarantee essential and necessary functions of a home for a young couple about to get married, however are limited in terms of extremely tight budget, and time of construction as short as possible, especially in the future it can be easily renovated and replaced when the economy is stable and life-changing is needed. Over many plans in place, the architects finally find the most optimal plan. For more than 70 years, Construct story has always been about innovation. In 1885 we began testing and certifying grain cargoes before they were put to sea, and in 1888 we pioneered the idea of independent testing laboratories. Then in 1896, the greatest inventor of them all became part of our story.'},
          { pagraph: 'fase1', textContent: 'With a design perspective of linking living space to natural, atrium space plays the central role of the house, which is the convergence of the sun, wind and trees, of all factors that contribute to a healthy life, which has always been purified. Entering the house, the entire public space is arranged smoothly and airy, with a garage, living room, kitchen and dining room splited in a conventional way, which creates the feeling that the house is really large and comfortable. On the other hand, the recycling of some details from the old house is both the way to keep back memories and the way to save.'}
        ]
      },
      { 
        title: 'Beautiful walkway', 
        description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', 
        image: 'B2.jpg', 
        pictures: [
          { name: 'fase1', src: 'B.jpg' },
          { name: 'fase2', src: 'B1.jpg' },
          { name: 'fase3', src: 'B3.jpg' },
        ],
        fullDescription: [
          { pagraph: 'main', textContent: 'With an area of just over 46 square meters, the house is required to guarantee essential and necessary functions of a home for a young couple about to get married, however are limited in terms of extremely tight budget, and time of construction as short as possible, especially in the future it can be easily renovated and replaced when the economy is stable and life-changing is needed. Over many plans in place, the architects finally find the most optimal plan. For more than 70 years, Construct story has always been about innovation. In 1885 we began testing and certifying grain cargoes before they were put to sea, and in 1888 we pioneered the idea of independent testing laboratories. Then in 1896, the greatest inventor of them all became part of our story.'},
          { pagraph: 'fase1', textContent: 'With a design perspective of linking living space to natural, atrium space plays the central role of the house, which is the convergence of the sun, wind and trees, of all factors that contribute to a healthy life, which has always been purified. Entering the house, the entire public space is arranged smoothly and airy, with a garage, living room, kitchen and dining room splited in a conventional way, which creates the feeling that the house is really large and comfortable. On the other hand, the recycling of some details from the old house is both the way to keep back memories and the way to save.'}
        ]
      },
      { 
        title: 'Slab Foundation', 
        description: 'late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’', 
        image: 'C1.jpg', 
        pictures: [
          { name: 'fase1', src: 'C3.jpg' },
          { name: 'fase2', src: 'C2.jpg' },
          { name: 'fase3', src: 'C8.jpg' },
        ],
        fullDescription: [
          { pagraph: 'main', textContent: 'With an area of just over 46 square meters, the house is required to guarantee essential and necessary functions of a home for a young couple about to get married, however are limited in terms of extremely tight budget, and time of construction as short as possible, especially in the future it can be easily renovated and replaced when the economy is stable and life-changing is needed. Over many plans in place, the architects finally find the most optimal plan. For more than 70 years, Construct story has always been about innovation. In 1885 we began testing and certifying grain cargoes before they were put to sea, and in 1888 we pioneered the idea of independent testing laboratories. Then in 1896, the greatest inventor of them all became part of our story.'},
          { pagraph: 'fase1', textContent: 'With a design perspective of linking living space to natural, atrium space plays the central role of the house, which is the convergence of the sun, wind and trees, of all factors that contribute to a healthy life, which has always been purified. Entering the house, the entire public space is arranged smoothly and airy, with a garage, living room, kitchen and dining room splited in a conventional way, which creates the feeling that the house is really large and comfortable. On the other hand, the recycling of some details from the old house is both the way to keep back memories and the way to save.'}
        ]
      }
    ]
  }),

}
</script>
<style lang="sass" scoped>
  .latestJobs
    margin: 3em 0 6em
    .header-min
      font-size: 1rem
      text-transform: uppercase
      letter-spacing: 5px
      color: black
    .header-title
      font-size: 2.5rem
      letter-spacing: 5px
      font-weight: 500
    p 
      font-size: 1.2rem
</style>
