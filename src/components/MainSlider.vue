<template>
    <section class="main-slider" id="section-main">
            <!--<img src="@/assets/images/icons/scroll-bar.png" class="icon-scroll"/>-->
        <div class="slide-content-overlay">
            <div class="slide-content-details">
                <div class="info-logo"></div>
                <p class="slide-title">WE BUILD CONCRETE SOLUTIONS FOR FULFILL YOUR NEEDS</p>
                <p class="slide-subtitle">No matter how big or small your project is.</p>
                <a href="tel:(707)-490-7975">
                    <div class="btn-quote mt-8">
                        FREE QUOTE
                    </div>
                </a>
            </div>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <div class="slide-content slide-content-slide-1">
                    <!--<div class="info-logo"></div>-->
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-2">
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-3">
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-4">
                </div>            
            </swiper-slide>
            <swiper-slide>
                <div class="slide-content slide-content-slide-5">
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
                    loop: true,
                    autoplay: {
                        delay: 8000,
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
    height: 92vh
    @include laptop 
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
    .btn-quote 
        padding: 10px 15px
        border: 1px solid white 
        border-radius: 5px
        font-size: 16px
        font-weight: 500
    
    .swiper-container::v-deep
        width: 100% 
        height: 100%
        z-index: inherit
        .swiper-pagination
            bottom: 10% 
            @include laptop 
                bottom: 5%
        .swiper-pagination-bullet
            z-index: 2
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
        &-overlay
            position: absolute 
            top: 0
            left: 0
            right: 0
            width: 100% 
            height: 100%
            z-index: 2
            pointer-events: none
            background: linear-gradient(360deg, #000000db, transparent)
            @include laptop
                background: linear-gradient(84deg, #000000db, transparent)
        &-details
            display: flex 
            flex-direction: column 
            justify-content: center
            align-items: center 
            width: 100%
            height: 100%
            //padding-bottom: 20%
            color: white 
            @include laptop
                align-items: flex-start 
                max-width: 1200px
                margin: auto
            .slide-title
                width: 250px
                font-size: 1.5rem
                line-height: 1.5rem
                font-weight: 600
                text-align: center
                @include laptop
                    font-size: 2.5rem
                    line-height: 2.5rem
                    width: 550px
                    text-align: left
            .slide-subtitle
                font-size: 1rem
                line-height: 1rem
                font-weight: 500
                width: 250px
                color: white
                text-align: center
                @include laptop 
                    font-size: 1.25rem
                    font-weight: 500
                    line-height: 3.5rem
                    width: 550px
                    text-align: left
            a 
                text-decoration: none
                pointer-events: auto
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
            background-position: 59% 15%
            @include laptop
                background-position: 0 15%

        &-slide-2
            background-image: url('~@/assets/images/main-slider/slide03.jpg')
            background-position: 0 100%
            @include laptop
                background-position: 0 100%
        &-slide-3
            background-image: url('~@/assets/images/main-slider/slide01.jpg')
            background-position: 50% 50%
            @include laptop
                background-position: 0 50%
        &-slide-4
            background-image: url('~@/assets/images/main-slider/slide04.jpg')
            background-position: 0 50%
            @include laptop
                background-position: 0 50%
        &-slide-5
            background-image: url('~@/assets/images/main-slider/slide05.jpg')
            background-position: 0 50%
            @include laptop
                background-position: 0 50%

        .slide-content-title 
            font-size: 4rem
            font-weight: 600
            color: white 
</style>

