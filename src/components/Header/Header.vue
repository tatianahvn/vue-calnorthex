<template>
	<v-app-bar v-resize="onResize"
		class="app-nav"
		color="white"
		elevate-on-scroll 
		fixed 
		app 
    >
		<v-container fluid class="pa-0">
			<div :class="scrolled ? 'main-nav scrolled': 'main-nav'">
				<div class="d-flex flex-row justify-space-between justify-md-star align-center w-100">
					<router-link to="/">
						<img src="@/assets/images/img-lg-calnorthex.png" class="lg-calnorthex"/>
					</router-link>

					<div v-if="isMobile"
						@click="showSidebar()"
						:style="scrolled ? 'margin-top: -10px': ''"
					>
						<div class="icon-menu mr-4"></div>
					</div>
				</div>
				<div v-if="!isMobile" class="wrap-menu menu">
					<v-list>
						<v-list-item-group 
							v-model="menuSelection"
							active-class="active"
						>
							<v-list-item 
								v-for="(item, index) in navItems"
								:key="item.title"
								link
								:class="`menu-item item-${index}`"
								:id="`item-${index}`"
								:ref="`item-${index}`"
								@click="redirect(item.type, item.id)"
							>
								<v-list-item-title>{{item.title}}</v-list-item-title>
							</v-list-item>
							
						</v-list-item-group>
					</v-list>
					
					<a href="tel:(707)-490-7975">
						<div class="contact-phone d-flex justify-space-around align-center">
							<div class="icon-phone ml-2"></div>
							<p class="mb-0 mr-2">(707) 490-7975</p>
						</div>
					</a>
				</div>
			</div>
		</v-container>
	</v-app-bar>
</template>

<script>

export default {
	name: 'Header',
	props: {
    navItems: {
		type: Array,
		default: () => [],
		require: false
    }
	},
	data:()=>({
		active: false,
		drawer: false,
		fixed: false,
		miniVariant: false,
		right: true,
		activeSidebar: false,
		menuSelection: 0,
		mobileHeight: 80,
		deskHeight: 85,
		scrolled: false,
		windowSize:{
			x: 0,
			y: 0
		},
		styleColors:{
			baseRed: '#9C171F',
			baseGray: '#58585C'
		}
	}),
	mounted(){
		this.onResize()
	},
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	},
	computed: {
		navHeight(){
			if(this.scrolled)
				return 50
			else 
				return 85
		},
		isHome(){
			if(this.$route.path == '/'){
				return true
			}else{
				return false
			}
		},
		isMobile(){
			if(this.windowSize.x < 960){
				return true
			}else{
				return false
			}
		}
	},
	methods:{
		toggleNavClass(){
        if(this.active == false){
          return 'nav'
        } else {
          return 'sticky-nav'
        }
    },

		redirect(type, value){
			if(type == 'scroll'){
				let data = {
					scrollingActive: true,
					sectionID: value
				}
				this.$store.commit('setRedirectMode', data)

				if(this.isHome)
					document.getElementById(`${value}`).scrollIntoView({ behavior: 'smooth'})
				else 
					this.$router.push({
						path: '/'
					})

			}else {
				let data = {
					scrollingActive: false,
					sectionID: value
				}
				this.$store.commit('setRedirectMode', data)

				if(this.$route.path != `/${ value }`){
					this.$router.push({
						path: `/${ value }`
					})
				}
			}
		},
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight }
		},
		showSidebar(){
			this.activeSidebar = !this.activeSidebar
			this.$emit('handlerSidebar', this.activeSidebar)
		},
		handleScroll(){
			// Check if the scroll of window is bigger that height of header for custom styles in app-bar
			this.scrolled = window.scrollY > this.deskHeight;
		}
	
	}

}
</script>

<style lang="sass" scoped>

.app-nav::v-deep
	background-color: white
	height: fit-content!important
	.v-toolbar__content
		padding: 0
		height: fit-content!important

.main-title
	padding-top: 8px
	color: white
	font-size: 2rem
	display: none

.main-nav 
	display: flex 
	flex-direction: row 
	justify-content: space-between
	align-content: center
	transition: 1s
	height: 85px

	.wrap-menu
		display: flex 
		flex-direction: row
		justify-content: center
		align-content: center 
		font-size: 1.5rem
		height: 100%
	&:before 
		content: ''
		width: 100% 
		height: 4px 
		position: absolute 
		left: 0
		bottom: 0
		background: linear-gradient(90deg, $base-gray 0, $base-red)


	.lg-calnorthex
		width: 230px
		margin-top: 5px
		transition: 1s
		@include laptop
			width: 240px

.main-nav.scrolled
	height: 65px
	font-size: .5rem
	transition: 1s

	&:before 
		height: 2px 

	.lg-calnorthex
		margin-top: 5px
		width: 165px

	.contact-phone
		transition: 1s
		margin-top: 4%
		
	.v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon
		font-size: 26px!important

.menu
	.v-list
		display: flex
		flex-direction: row
		padding: 0
		background: rgba(0,0,0,0)
		font-family: $font-title
		text-transform: uppercase
	
	.v-list-item-group
		position: relative
		display: flex
		align-items: center
		height: 100%
		.v-list-item
			padding: 0 16px
			text-decoration: none
			min-width: fit-content
			text-align: center
			color: $soft-black
			&::after, 
			&::before 
				display: none

	.menu-item.active 
		color: $base-red
	
	.v-list-item__title
		font-size: 1rem
		font-weight: 500
		
.contact-phone
	transition: 1s
	width: 175px
	margin-top: 8.5%
	height: 50px
	font-size: 1rem
	line-height: 1rem
	vertical-align: center
	font-weight: 600
	color: white!important 
	background-color: $base-red


.icon-menu
	width: 25px
	height: 25px
	mask: url('../../assets/images/icons/menu.png')
	mask-size: cover
	background-color: $base-gray
	margin: auto
	margin-right: 10px

.icon-phone
	width: 24px
	height: 24px
	mask: url('../../assets/images/icons/phone.svg')
	mask-size: cover
	background-color: white

a
	text-decoration: none

.w-100
	width: 100%

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
	color: $soft-black
	&:hover 
		color: $base-red

.theme--light.v-btn.v-btn--icon
	color: $base-gray


// Animations
@keyframes reduce 
	0% 
		height: inherit
	100% 
		height: 60px
		opacity: .8
		font-size: .5rem

@keyframes imageResize
	0%
		width: inherit
	100%
		width: 150px

@keyframes fontSize 
	0%
		font-size: 1rem 
		font-weight: 500
	100% 
		font-size: .85rem
		font-weight: 400

</style>