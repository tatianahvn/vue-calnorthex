<template>
  <div class="home">
    <MainSlider/>
    <!-- <MainBanner/> -->
    <!--MainShortContact/>-->
    <MainDescription/>
    <ServicesPresentation/>
    <MainServices/>
    <!--<MainSliderProjects/>-->
    <VideoConcrete/>
    <BannerWeLove/>
    <Testimonials/>
    <MainGallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlider from '@/components/MainSlider'
//import MainShortContact from '@/components/MainShortContact'
import MainServices from '@/components/MainServices'
import MainDescription from '@/components/MainDescription'
import MainGallery from '@/components/MainGallery'
//import MainSliderProjects from '@/components/MainSliderProjects'
import ServicesPresentation from '@/components/ServicesPresentation'
import BannerWeLove from '@/components/BannerWeLove'
import VideoConcrete from '@/components/VideoConcrete'
import Testimonials from '@/components/Testimonials'


export default {
  components: {
    MainSlider,
    MainDescription,
    //MainShortContact,
    MainServices,
    ServicesPresentation,
    //MainSliderProjects,
    MainGallery,
    BannerWeLove,
    VideoConcrete,
    Testimonials
  },
  mounted(){
    let redirectMode = this.$store.state.redirectMode 

    if(redirectMode.scrollingActive){
        document.getElementById(`${redirectMode.sectionID}`).scrollIntoView({ behavior: 'smooth'})
    }
  },
  methods: {
    goToSection(elID){
			if(elID == 'home'){
				this.goHome()
			}else{
				if(this.isHome){
					document.getElementById(`${elID}`).scrollIntoView({ behavior: 'smooth'})
				}else{
					this.goHome()
					document.getElementById(`${elID}`).scrollIntoView({ behavior: 'smooth'})
				}	
			}
		},
  }
}
</script>
