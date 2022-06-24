<template>
    <section class="main-slider" id="main-slider">
            <!--<img src="@/assets/images/icons/scroll-bar.png" class="icon-scroll"/>-->
            <div class="slide-content-details">
                <div class="info-logo"></div>
                <p class="slide-title">WE BUILD CONCRETE SOLUTIONS FOR FULFILL YOUR NEEDS</p>
                <p class="slide-subtitle">No matter how to big or small your project is.</p>
                <v-btn large outlined dark class="btn-quote mt-8" to="/contact">
                    FREE QUOTE
                </v-btn>
                
            </div>
        <swiper ref="mySwiper" :options="swiperOptions">

            <swiper-slide>
                <div class="slide-content slide-content-slide-1">
                    <div class="overlay-filter"></div>
                    <!--<div class="info-logo"></div>-->
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-2">
                    <div class="overlay-filter"></div>
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-3">
                    <div class="overlay-filter"></div>
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-4">
                    <div class="overlay-filter"></div>
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-5">
                    <div class="overlay-filter"></div>
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
    position: relative
    width: 100vw
    height: 100vh
    .icon-scroll
        position: absolute 
        width: 64px 
        height: 64px 
        bottom: 10% 
        right: 0
        left: 0
        margin: auto
        z-index: 99

    
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
            position: absolute 
            top: 0
            left: 0
            right: 0
            width: 100% 
            height: 100%
            display: flex 
            flex-direction: column 
            justify-content: center 
            align-items: flex-start
            width: 100% 
            height: 100%
            color: white 
            text-align: left
            margin-left: 5%
            z-index: 99
            pointer-events: none
            .slide-title 
                font-size: 2.5rem
                font-weight: 600
                line-height: 2.5rem
                width: 40%
                padding-right: 5%
            .slide-subtitle
                font-size: 1.25rem
                font-weight: 500
                line-height: 3.5rem
                width: 40%
                padding-right: 5%
                color: white
            .btn-quote
                color: white 


            
            /*.info-logo
                mask: url('../assets/images/img-lg-calnorthex.png')
                -webkit-mask-size: cover
                mask-size: cover
                background-color: rgba(255, 255, 255, 0.85)
                background-repeat: no-repeat
                width: 200px
                height: 64px*/

        &-slide-1
            background-image: url('~@/assets/images/main-slider/slide02.jpg')
            background-position: 0 15%
            //transform: rotate(120deg)

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

        .overlay-filter
            position: absolute 
            top: 0
            left: 0
            right: 0
            width: 100% 
            height: 100%
            //background-image: linear-gradient(47deg, #000000db 20%, transparent)
            background-color: rgba(0, 0, 0, 0.45)



        .slide-content-title 
            font-size: 4rem
            font-weight: 600
            color: white 
</style>

