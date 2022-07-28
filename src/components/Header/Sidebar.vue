<template>
	<v-navigation-drawer
		v-model="showSidebar"
		color="#fff"
		right
		fixed
		touchless
    >
		<div class="head-sidebar">
			<div @click="hideSidebar()">
				<div class="icon-close"></div>
			</div>
		</div>
		<v-list dense nav>
			<v-list-item  
			v-for="item in navItems"
			:key="item.title"
			link>
			<v-list-item-content>
				<v-list-item-title 
					@click="redirect(item.type, item.id)"
				>
					{{ item.title }}
				</v-list-item-title>
			</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>

export default {
	name: 'Sidebar',
	props: {
		navItems: {
				type: Array,
				default: () => [],
				require: false
		},
		showSidebar: {
			type: Boolean,
			default: false,
			required: true
		}
	},
	computed:{
		options() {
			return {	
				duration: 2000,
				offset: 0, 
				easing: 'easeInOutCubic'
				}
		},
		isHome(){
			if(this.$route.path == '/'){
				return true
			}else{
				return false
			}
		}
	},
	data(){
		return{
			styleColors: {
				baseRed: '#9C171F',
				baseGray: '#58585C'
			},
		}
	},
	methods: {
		hideSidebar(){
			this.$emit('close')
		},
		/*
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
		goHome(){
			if(this.$route.path != '/'){
					
				}
			this.hideSidebar()
		},*/
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

			this.hideSidebar()
		}
	}
}
</script>

<style lang="sass" scoped>
.v-navigation-drawer
	width: 100%!important 
	text-align: center

	.v-list
		display: flex
		flex-direction: column
		padding: 0
	
		.v-list-item 
			padding: 0 8px
		
		.v-list-item__title
			font-size: 1.5rem
			padding: .5rem

	.head-sidebar
		width: 100% 
		display: flex 
		flex-direction: row 
		justify-content: flex-end
		height: 80px
		padding: 1rem

	.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
		color: $base-gray !important
		&:hover
			color: $base-red

	.theme--light.v-btn.v-btn--icon
		color: $base-red	

.icon-close
	width: 20px
	height: 20px
	mask: url('../../assets/images/icons/close.png')
	mask-size: cover
	background-color: $base-gray
	margin: auto
	margin-right: 10px
</style>