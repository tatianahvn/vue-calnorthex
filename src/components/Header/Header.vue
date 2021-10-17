<template>
	<v-app-bar v-resize="onResize"
		:height='windowSize.x < 960 ? mobileHeight : navHeight'
		class="app-nav"
		color="#fff"
		elevate-on-scroll 
		fixed 
		app 
    >
		<v-container fluid class="pa-0">
			<div :class="scrolled ? 'main-nav scrolled': 'main-nav'">
				<v-col class="pa-0">
					<v-row class="wrap-identity">
						<router-link to="/">
							<figure class="lg-calnorthex">
								<img src="@/assets/images/img-lg-calnorthex.png"/>
							</figure>
						</router-link>
						<p class="main-title mb-0">Calnorthex Concrete</p>
						<v-spacer v-if="isMobile"></v-spacer>
						<v-btn v-if="isMobile"
							@click.stop="showSidebar()"
							icon
						>
							<v-icon>mdi-menu</v-icon>
						</v-btn>
					</v-row>
				</v-col>
			<v-col v-if="!isMobile" class="pa-0">
							<v-row class="wrap-menu menu">
				<v-list text>
					<v-list-item-group 
						v-model="menuSelection"
						active-class="active"
					>
						<v-list-item 
							link
							class="menu-item item-home"
							@click="this.goHome"
						>
							<v-list-item-title>Home</v-list-item-title>
						</v-list-item>
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
							</v-row>
				</v-col>
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
					this.goHome()

			}else {
				let data = {
					scrollingActive: false,
					sectionID: value
				}
				this.$store.commit('setRedirectMode', data)

				this.$router.push({
					path: `/${ value }`
				})
			}
		},
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight }
		},
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
.v-app-bar--is-scrolled
	background-color: red 
	z-index: 99
.v-toolbar__content
	padding: 0

.app-nav::v-deep
	.v-toolbar__content
		padding: 0
.v-app-bar.v-app-bar--is-scrolled
	background-color:red 
	z-index: 99

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
	height: 100%
	.wrap-identity 
		display: flex 
		justify-content: flex-start
		align-content: center
		height: 100%
	.wrap-menu
		display: flex 
		justify-content: space-evenly
		align-content: center 
		height: 100% 
		font-size: 1.5rem
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
		@include laptop
			width: 240px

.main-nav.scrolled
	&:before 
		height: 2px 
	.lg-calnorthex
		@include laptop
			width: 150px
	

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
		color: $base-red
	
	.v-list-item__title
		font-size: 1rem
		font-weight: 500

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
	color: $soft-black !important
	&:hover 
		color: $base-red !important

.theme--light.v-btn.v-btn--icon
	color: $base-gray

</style>