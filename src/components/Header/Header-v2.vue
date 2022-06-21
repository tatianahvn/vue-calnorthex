<template>
	<v-app-bar v-resize="onResize"
		class="app-nav"
		color="transparent"
		elevate-on-scroll 
		fixed 
		app 
    >
		<section class="header-cltx">
			<div :class="scrolled ? 'main-nav d-flex flex-row justify-space-between align-center scrolled': 'main-nav d-flex flex-row justify-space-between align-center'">
					<v-col>
						<router-link to="/">
							<div class="info-logo"></div>
						</router-link>
					</v-col>
					<v-col class="pa-0">
						<div class="wrap-menu menu" v-if="!isMobile">
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
						</div>

						<v-btn v-else
							@click.stop="showSidebar()"
							:style="scrolled ? 'margin-top: -10px': ''"
							icon
						>
							<v-icon>mdi-menu</v-icon>
						</v-btn>
					</v-col>

				
				
			</div>
			</section>
	</v-app-bar>
</template>

<script>

export default {
	name: 'HeaderV2',
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
		/*
		goToDefaultHome(){
			let data = {
				scrollingActive: false,
				sectionID: null
			}
			this.$store.commit('setRedirectMode', data)
			this.goHome()
		},
		goHome(){
			this.$router.push('/')
		},*/
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
	width: 100vw
	background-color: transparent!important
	height: fit-content!important
	.v-toolbar__content
		padding: 0
		width: 100%
		height: fit-content!important

.header-cltx
	width: 100%

.main-title
	padding-top: 8px
	color: white
	font-size: 2rem
	display: none

.main-nav 
	display: flex 
	flex-direction: row 
	justify-content: center 
	align-content: center
	transition: .5s
	height: 100%
	width: 100%

	.wrap-menu
		display: flex 
		justify-content: space-evenly
		align-content: center 
		font-size: 1.5rem
		height: 100%
	/*&:before 
		content: ''
		width: 100% 
		height: 4px 
		position: absolute 
		left: 0
		bottom: 0
		background: linear-gradient(90deg, $base-gray 0, $base-red)*/

	.lg-calnorthex
		width: 230px
		margin-top: 5px
		transition: .5s
		@include laptop
			width: 240px

.main-nav.scrolled
	height: 65px
	opacity: .8
	font-size: .5rem

	&:before 
		height: 2px 
		
	.v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon
		font-size: 26px!important

.container--fluid
	width: 100vw

.menu
	.v-list
		display: flex
		flex-direction: row
		padding: 0
		background: rgba(0,0,0,0)
		height: 100%
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
			min-width: 8.5rem
			text-align: center
			height: 100%
			color: $base-gray

	.menu-item.active 
		color: white
	
	.v-list-item__title
		font-size: 1rem
		font-weight: 600
		

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
	color: white !important

.theme--light.v-btn.v-btn--icon
	color: $base-gray

.info-logo
	mask: url('../../assets/images/img-lg-calnorthex.png')
	-webkit-mask-size: contain
	mask-size: contain
	background-color: white
	background-repeat: no-repeat
	background-position: center
	width: 250px
	height: 80px
	margin-left: 7%


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