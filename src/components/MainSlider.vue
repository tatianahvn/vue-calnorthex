<template>
    <section class="main-slider mt-16" id="main-slider">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <div class="slide-content slide-content-slide-1">
                    <v-col cols="12" md="6">
                        <div class="slide-content-details">
                            <p class="slide-content-title "></p>
                        </div>
                    </v-col>
                    <div class="info-logo"></div>
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-2">
                    <div class="info-logo"></div>
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-3">
                    <div class="info-logo"></div>
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-4">
                    <div class="info-logo"></div>    
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-5">
                    <div class="info-logo"></div>  
                </div>            
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

    export default {
        name: 'MainSlider',
        data(){
            return{
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: {
                        delay: 10000,
                        disableOnInteraction: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        }
        
    }
</script>
<style lang="sass" scoped>
.main-slider
    width: 100%
    height: calc(100vh - 120px)
    
    .swiper-container::v-deep
        width: 100% 
        height: 100%
        .swiper-pagination-bullet
            background: white
            margin: 7px 
            width: 12px 
            height: 12px
    .slide-content
        display: flex 
        flex-direction: row
        width: 100% 
        height: 100%
        background-size: cover 
        &-details 
            display: flex 
            flex-direction: column 
            justify-content: center 
            align-items: center
            width: 100% 
            height: 100%
            color: white 
        &-slide-1
            background-image: url('~@/assets/images/main-slider/slide02.jpg')
            background-position: 0 15%
        &-slide-2
            background-image: url('~@/assets/images/main-slider/slide03.jpg')
            background-position: 0 100%
        &-slide-3
            background-image: url('~@/assets/images/main-slider/slide01.jpg')
            background-position: 0 50%
        &-slide-4
            background-image: url('~@/assets/images/main-slider/slide04.jpg')
            background-position: 0 50%
        &-slide-5
            background-image: url('~@/assets/images/main-slider/slide05.jpg')
            background-position: 0 50%

        &::after
            content: ''
            position: absolute 
            top: 0
            left: 0
            right: 0
            width: 100% 
            height: 100%
            //background-color: rgba(0, 0, 0, 0.25)

        .info-logo
            position: absolute
            mask: url('../assets/images/img-lg-calnorthex.png')
            -webkit-mask-size: cover
            mask-size: cover
            background-color: rgba(255, 255, 255, 0.85)
            background-repeat: no-repeat
            margin: auto
            width: 200px
            height: 64px
            bottom: 6%
            right: 3%
        .slide-content-title 
            font-size: 4rem
            font-weight: 600
            color: white 
</style>

