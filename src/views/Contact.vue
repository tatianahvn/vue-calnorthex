<template>
  <div class="container--fluid pageContact mt-15">
    <div class="page-wrap">
      <div class="first-section d-flex flex-column-reverse flex-md-row justify-center align-center">
        <v-col cols="12" md="6" class="pa-0">
            <v-img class="latestJob-photo" alt="Finished concrete work by Calnorthex Concrete in Santa Rosa, CA" :src="require(`@/assets/images/gallery/C2.jpg`)"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="main-description pa-8">
          <h1 class="font-title title-component text-center mt-5 mt-md-0">CONTACT INFO</h1>
          <div class="separator"></div>
          <p class="pt-2">Phone: <a href="tel:7074907975">(707) 490-7975</a></p>
          <p>Email: <a href="mailto:calnorthex@gmail.com">calnorthex@gmail.com </a></p>
          <p class="pt-2 txt-bold">OPERATION HOURS</p>
          <p class="txt-center">Monday to friday: 8:00 AM to 6:00 PM <br>
              Saturday: only by appoiment 
          </p>
          <p class="pt-2 txt-center">Santa Rosa, CA</p>
          <div class="separator"></div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import { pageMeta } from '@/seo'

export default {
  name: 'Contact',
  metaInfo: pageMeta({
    title: 'Contact Us',
    description: 'Get in touch with Calnorthex Concrete in Santa Rosa, CA. Call (707) 490-7975 or email calnorthex@gmail.com. Open Monday to Friday, 8:00 AM to 6:00 PM.',
    path: '/contact'
  }),
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="sass" scoped>
.pageContact
  .title-component
    font-size: 1.25rem 
    letter-spacing: 5px
    text-transform: uppercase
    color: $dark-gray
    @include laptop 
      font-size: 2rem 
      letter-spacing: 10px
  .latestJob-photo
    height: 87vh
    max-height: 750px
    filter: grayscale(100%) contrast(120%) brightness(80%)

  .main-description
    display: flex 
    flex-direction: column 
    align-items: center 
    justify-content: center
    background-color: #f9f9f9
  p
    font-size: 1.2rem
    color: #666
    text-align: justify
  a
    text-decoration: none
    color: $base-red
  .txt-center
    text-align: center
  .txt-bold
    font-weight: bold
  .separator
    width: 80%
    margin-top: 1rem
    height: 10px
    border-top: 2px solid #dbdbdb

</style>