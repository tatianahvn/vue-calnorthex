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
        <!--<figure e="width: 50px; margin: 0 auto;">-->
          <span :class="`service-icons ${item.icon}`"></span>
          <!-- <img max-width="96" :src="require(`@/assets/images/icons/${item.icon}`)"/>-->
        
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
          { title: 'Removal & Replace Concrete', description: '', icon: 'icon-jackhammer' },
          { title: 'Driveways & Walkways', description: '', icon: 'icon-trowel' },
          { title: 'Slab Foundation', description: '', icon: 'icon-architecture' },
          { title: 'Footing Excavation ', description: '', icon: 'icon-vehicle-dozer' },
          { title: 'Driveway surfaces', description: '', icon: 'icon-mixer-truck' },
          { title: 'Retaining wall excavation', description: '', icon: 'icon-measure' },
          { title: '10+ Years of Experience in Excavation ', description: '', icon: 'icon-vehicle-excavator' },
          { title: 'Top Materials', description: '', icon: 'icon-badge' },
          { title: 'And More', description: '', icon: 'icon-project' },
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
  padding: 3rem
  .filter-layout 
    position: absolute 
    width: 100% 
    height: 100% 
    top: 0
    left: 0
    background-color: rgb(35 0 0 / 60%)
    
  .card-service
    display: flex 
    flex-direction: column 
    width: 100% 
    padding: 3rem
    color: white 
    text-align: center
    z-index: 2
    @include laptop 
      padding: 3rem
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
    
    &:hover
      .service-icons
        background-color: $base-red

  .icon-measure
    width: 55px
    height: 55px
    mask: url('../assets/images/icons/measure.svg')
    mask-size: cover
    background-color: white
    margin: auto
  .icon-architecture
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/architecture.svg')
    mask-size: cover
    background-color: white
    margin: auto
  .icon-construction 
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/under-construction-alt.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-vehicle-cement
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/vehicle-cement.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-engineer
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/engineer.svg')
    mask-size: cover
    background-color: white
    margin: auto


  .icon-light-bulb
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/light-bulb.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-trowel
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/trowel.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-vehicle-excavator
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/excavator.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-vehicle-dozer 
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/bulldozer.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-badge
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/badge.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-mixer-truck
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/mixer-truck.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-jackhammer
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/jackhammer.svg')
    mask-size: cover
    background-color: white
    margin: auto

  .icon-project
    width: 60px
    height: 60px
    mask: url('../assets/images/icons/project.svg')
    mask-size: cover
    background-color: white
    margin: auto

  

</style>