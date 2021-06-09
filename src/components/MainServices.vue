<template>
  <section class="services container--fluid">
    <div class="d-flex flex-column flex-md-row">
      <div
        class="card-service"
        v-for="(item, index) in services"
        :key="item.title"
        :id="`item-${index}`"
      >
      <figure style="width: 65px; margin: 0 auto;">
        <img max-width="96" :src="require(`@/assets/images/icons/${item.icon}`)"/>
      </figure>
      <h2 class="card-service-title">{{item.title}}</h2>
      <p class="card-service-description">{{item.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Description',
    data(){
      return{
        services: [
          { title: 'Design', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore.', icon: 'icon-drawing-96.png' },
          { title: 'Concrete', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore.', icon: 'icon-construction-96.png' },
          { title: 'Solutions', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore.', icon: 'icon-idea-96.png' },
          { title: 'Construction', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore.', icon: 'icon-bulldozer-96.png' },
        ]
      }
    }

  }
</script>

<style lang="sass" scoped>
.services 
  background-color: $base-red 

  .card-service
    display: flex 
    flex-direction: column 
    width: 100% 
    padding: 3rem
    color: white 
    text-align: center
    @include laptop 
      padding: 5rem 2rem
    &-title 
      font-family: $font-title
      letter-spacing: .18rem
      text-transform: uppercase
      color: white
      margin: 20px 0
    &-description
      font-size: 1.2rem
      color: $white-80

</style>