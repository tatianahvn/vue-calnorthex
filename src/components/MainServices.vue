<template>
  <section class="services container--fluid">
    <div class="filter-layout"></div>
    <v-row>
      <v-col cols="4"
        class="card-service"
        v-for="(item, index) in services"
        :key="item.title"
        :id="`item-${index}`"
      >
        <figure style="width: 50px; margin: 0 auto;">
          <img max-width="96" :src="require(`@/assets/images/icons/${item.icon}`)"/>
        </figure>
        <h2 class="card-service-title">{{item.title}}</h2>
        <p class="card-service-description">{{item.description}}</p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Description',
    data(){
      return{
        services: [
          { title: 'Removal & Replace Concrete', description: '', icon: 'icon-drawing-96.png' },
          { title: 'Driveways & Walkways', description: '', icon: 'icon-construction-96.png' },
          { title: 'Slab Foundation', description: '', icon: 'icon-idea-96.png' },
          { title: 'Footing Excavation ', description: '', icon: 'icon-bulldozer-96.png' },
          { title: 'Driveway surfaces', description: '', icon: 'icon-drawing-96.png' },
          { title: 'Retaining wall excavation', description: '', icon: 'icon-construction-96.png' },
          { title: '10+ Years of Experience in Excavation ', description: '', icon: 'icon-idea-96.png' },
          { title: 'And More', description: '', icon: 'icon-bulldozer-96.png' },
        ]
      }
    }

  }
</script>

<style lang="sass" scoped>
.services 
  position: relative
  background-image: url('../assets/images/hero-animated/slider01.jpeg')
  background-position: center 
  background-size: cover
  padding: 4rem 2rem
  .filter-layout 
    position: absolute 
    width: 100% 
    height: 100% 
    top: 0
    left: 0
    background-color: rgb(156 23 31 / 45%)
    

  .card-service
    display: flex 
    flex-direction: column 
    width: 100% 
    padding: 2rem
    color: white 
    text-align: center
    z-index: 9
    &-title 
      font-family: $font-title
      letter-spacing: .18rem
      text-transform: uppercase
      color: white
      margin: 20px 0
      font-size: 1.1rem
      width: 50%
      max-width: 170px
      margin: auto
    &-description
      font-size: 1.2rem
      color: $white-80

</style>