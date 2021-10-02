<template>
  <section class="services container--fluid" v-on:scroll.passive="handleScroll" >
    <div class="filter-layout"></div>
    <div class="services-wrap">
      <v-row>
        <v-col sm="12" md="6" style="z-index:2">
          <div class="card-service services-left"
            v-for="(item, index) in servicesLeft"
            :key="item.title"
            :id="`item-${index}`"
          >
            <span :class="`service-icons ${item.icon}`"></span>
            <v-col>
              <h2 class="card-service-title">{{item.title}}</h2>
              <!--<p class="card-service-description">{{item.description}}</p>-->
            </v-col>
          </div>
        </v-col>

        <v-col sm="12" md="6" style="z-index:2">
          <div class="card-service services-right"
            v-for="(item, index) in servicesRight"
            :key="item.title"
            :id="`item-${index}`"
          >
            <span :class="`service-icons ${item.icon}`"></span>
            <v-col>
              <h2 class="card-service-title">{{item.title}}</h2>
              <!--<p class="card-service-description">{{item.description}}</p>-->
            </v-col>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Description',
    data(){
      return{
        servicesLeft: [
          { title: 'Removal & Replace Concrete', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-jackhammer' },
          { title: 'Slab Foundation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-architecture' },
          { title: '10+ Years of Experience in Excavation ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-vehicle-excavator' },
        ],
        servicesRight : [
          { title: 'Driveways & Walkways', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-trowel' },
          { title: 'Retaining wall excavation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-measure' },
          { title: 'Footing Excavation ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-vehicle-dozer' },
        ],
        services: [
          { title: 'Removal & Replace Concrete', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-jackhammer' },
          { title: 'Driveways & Walkways', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-trowel' },
          { title: 'Slab Foundation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-architecture' },
          { title: 'Footing Excavation ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-vehicle-dozer' },
          //{ title: 'Driveway surfaces', description: '', icon: 'icon-mixer-truck' },
          { title: 'Retaining wall excavation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-measure' },
          { title: '10+ Years of Experience in Excavation ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam nisl sit amet venenatis venenatis.', icon: 'icon-vehicle-excavator' },
          //{ title: 'Top Materials', description: '', icon: 'icon-badge' },
          //{ title: 'And More', description: '', icon: 'icon-project' },
        ]
      }
    },  
    /* mounted(){
      window.addEventListener('scroll', this.handleScroll);
    },*/
    methods: {
      handleScroll(){
        console.log('scroll')
        document.getElementById('services').styles.backgroundPosition = '-50px' 
      }
    },

  }
</script>

<style lang="sass" scoped>
.services 
  position: relative
  background-image: url('../assets/images/hero-animated/slider01.jpeg')
  background-position: center 
  background-size: cover
  @include laptop
    padding: 3rem

  .services-wrap
    z-index: 2
    padding: 3rem 0
    @include laptop
      padding: 0
  .services-left
    text-align: right
    flex-direction: row-reverse
  .services-right
    text-align: left
    flex-direction: row
  .title-component 
    font-size: 1.8rem 
    color: white
    text-align: center
    z-index: 2
    letter-spacing: 5px
    margin: 2rem auto

  
  .filter-layout 
    position: absolute 
    width: 100% 
    height: 100% 
    top: 0
    left: 0
    background-color: rgb(35 0 0 / 60%)
    
  .card-service
    display: flex 
    width: 100% 
    padding: 1rem
    color: white 
    z-index: 2
    cursor: default
    @include laptop 
      padding: 3rem 2rem

    &-title 
      font-family: $font-title
      letter-spacing: .18rem
      text-transform: uppercase
      color: white
      margin-bottom: 5px
      font-size: 1.2rem
      //width: 50%
      //max-width: 170px
      //margin: auto
    &-description
      font-size: 1.2rem
      color: $white-80
    
    &:hover
      .service-icons
        background-color: $base-yellow
    .service-icons 
      margin: auto 1rem

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