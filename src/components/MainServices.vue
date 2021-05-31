<template>
  <section class="services container--fluid">
    <div class="d-flex flex-column flex-md-row">
      <div
        class="card-service"
        v-for="(item, index) in services"
        :key="item.title"
        :id="`item-${index}`"
      >
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
          { title: 'Service one', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore ea consequat in aute non nisi cupidatat proident aliquip.', icon: '' },
          { title: 'Service two', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore ea consequat in aute non nisi cupidatat proident aliquip.', icon: '' },
          { title: 'Service tree', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore ea consequat in aute non nisi cupidatat proident aliquip.', icon: '' },
          { title: 'Another service', description: 'Proident laboris Lorem commodo culpa nisi ea cillum sunt ullamco elit ullamco labore. Minim reprehenderit id dolore ea consequat in aute non nisi cupidatat proident aliquip.', icon: '' },
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
    padding: 7rem 2rem
    color: white 
    text-align: center
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