<template>
  <section class="testimonials container--fluid">
    <div class="container py-5">
      <div class="d-flex flex-column my-10 justify-center align-center">
        <p class="font-title header-title">WHAT OUR CUSTOMERS SAYS?</p>
      </div>
      <div class="slider-testimonials mb-5">
        <swiper
          :options="swiperOption"
        >
          <swiper-slide
            v-for="(item, i) in testimonials"
            :key="i"
            transition="slide-x-transition"
          >
            <TestimonialCard :dataCard="item"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TestimonialCard from './Cards/testimonial-card.vue'

  export default {
    components: {
      Swiper,
      SwiperSlide,
      TestimonialCard
    },
    data() {
      return{
        swiperOption: {
          loop: true,
          //centeredSlides: true,
          
          autoplay: {
            delay: 5000,
            disableOnInteraction: true
          },
          
          breakpoints: {
              300: {
                  slidesPerView: 1,
                  spaceBetween: 10
              },
              600: {
                  slidesPerView: 2,
                  spaceBetween: 20
              },
              960: {
                  slidesPerView: 3,
                  spaceBetween: 40,
              }
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          }
        },
        testimonials: [
          { name: 'Walt J.', rank: '5', review: "I would tell others to look at the work Emmanuel has done for us and the other jobs around the area, because every single one seems top-notch. Ours was not a big job and I know he did many bigger jobs for neighbors and for a good friend of mine, and I believe they are all pretty happy as well. Emmanuel is a man who listens and basically lets you be the boss, so to speak, meaning that he's working for you to do whatever it takes to make you happy with the job." },
          { name: 'Michael W.', rank: '5', review:"We have used them multiple times, as have the rest of our family, and everyone who asks or needs similar work done, we recommend Emmanuel. He has probably done about 6 projects for us now and they have all been excellent. The quality is amazing. Everything from the price point to their promptness is great and that's why we continue to stick with them."},
          { name: 'Abigail T.', rank: '5', review: "They offer really good pricing compared to the other companies and I just ended up trusting them after using them. Their bid was a good price in that it was the lowest, but the quality was still very good. After the second time I used them, I completely trusted them and their abilities. The owner, Emmanuel, always has the best intentions in mind and he will tell you what's good or bad and what will or won't work."},
          { name: 'Molly P.', rank: '5', review: "They would be the first company I'd recommend for the work, because they do top-notch work, are professional and really guided us through the whole process. I'd give them an 11 on a scale of 1 to 10, because it was a great experience all around. Their professionalism and customer service, Emmanuel really delivered on what he promised."},
          { name: 'Lois D.', rank: '5', review: "I would recommend them and give them all of the gold stars or high ratings there are to give. Emmanuel is wonderful. They do very good work. Emmanuel is a very nice man who is efficient and has even come back to ask if everything was fine and okay. He is really good."},
          { name: 'Emily S.', rank: '5', review: "It was an excellent experience and what was promised to us is what Emmanuel delivered. He was always on time and came out when he said he was coming. The job was finished quickly and he did a little extra work for me. I really didn't have any questions. It was easy to work with him." },
  
          
        ]
      }
  }
}
</script>
<style lang="sass" scoped>
  .testimonials
    background-color: $white-ee
    max-width: 100%
    padding: 0 10px
    @include laptop
      padding: 1rem

    .header-min
      font-size: 1rem
      text-transform: uppercase
      letter-spacing: 3px
      color: black
    .header-title
      font-size: 1.5rem
      font-weight: 600
      text-align: center
      margin-bottom: 25px
      line-height: 1.5rem
      padding: 1rem 2rem
      @include laptop
        font-size: 2.5rem
        margin-botom: 20px
        padding: 0
    p 
      width: 100%
      font-size: 1.2rem
      line-height: 1.5rem
      @include laptop
        font-size: 16px
        line-height: 1.5rem
    .p-info
      text-align: justify
      @include laptop
        text-align: center
    
    .custom-card
      height: 400px
      &-asset
        height: 50vh
        @include laptop
          height: 100%
          transition: all .3s
    
    .slider-projects
      max-width: 1200px
      margin: auto

    .swiper-container
      padding-bottom: 65px
            
    .swiper-pagination ::v-deep
        position: absolute
        text-align: center
        transition: 300ms opacity
        transform: translate3d(0, 0, 0)
        z-index: 10
        .swiper-pagination-bullet
            width: 10px
            height: 10px
            background: $base-red!important
        .swiper-pagination-bullet-active
            background: $base-red!important
</style>
