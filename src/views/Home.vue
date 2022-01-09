<template>
  <div class="home">
    <MainBanner/>
    <MainDescription/>
    <ServicesPresentation/>
    <MainServices/>
    <MainSliderProjects/>
    <BannerWeLove/>
    <MainGallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner'
import MainDescription from '@/components/MainDescription'
import MainServices from '@/components/MainServices'
import MainGallery from '@/components/MainGallery'
import MainSliderProjects from '@/components/MainSliderProjects'
import ServicesPresentation from '@/components/ServicesPresentation'
import BannerWeLove from '@/components/BannerWeLove'


export default {
  components: {
    MainBanner,
    MainDescription,
    MainServices,
    ServicesPresentation,
    MainSliderProjects,
    MainGallery,
    BannerWeLove
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
