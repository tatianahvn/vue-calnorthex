<template>
  <v-footer>
		<div class="footer-wrap container">
			<v-col>
				<div class="d-flex flex-column align-center align-md-start justify-center">
					<h1 class="mb-5">Menu</h1>
					<a :class="`menu-item item-${index} my-3`"
						v-for="(item, index) in navItems"
						:key="item.title"
						:id="`item-${index}`"
						@click="redirect(item.type, item.id)"
					>
						<span class="cursor-pointer">{{item.title}}</span>
					</a>
				</div>
			</v-col>
			<v-col>
				<div class="footer-contact d-flex flex-column align-center align-md-start">
					<h1 class="mb-5">Contact Us</h1>
					<div class="d-flex justify-center align-center my-2">
						<div class="icon-email"></div>
						<span class="cursor-pointer">calnorthex@gmail.com</span>
					</div>
					<div class="d-flex justify-center align-center my-2">
						<div class="icon-phone"></div>
						<span>(707) 490-7975</span>
					</div>
					<br>
					<h1 class="mt-6 mb-3">CONTRACTORS LICENSE</h1>
					<span style="letter-spacing: 2px;"><strong>#1051560</strong></span>
				</div>
			</v-col>
			<v-col>
				<div class="footer-contact d-flex flex-column align-center align-md-start">
					<h1 class="mb-5">BUSINESS HOURS</h1>
						<span>Monday to friday: 8:00 AM to 6:00 PM</span>
						<span>Saturday: Only by appoiment</span>
						<span>Sunday: Closed</span>
						<br><br>
					<div class="d-flex flex-column align-center align-md-start justify-center">
					<h1 class="mt-6 mb-3">Social Media</h1> 
					<div class="d-flex flex-row">
						<v-btn :class="`menu-item item-${index} my-3 mr-5`"
							v-for="(item, index) in socialMedia"
							:key="item.name"
							:id="`item-${index}`"
							:href="item.url"
							icon
							link
						>
							<v-icon dark link>{{`mdi-${item.name}`}}</v-icon>
						</v-btn>
					</div>
				</div>
				
				</div>
			</v-col>
			<!--<v-col>
				<div class="d-flex flex-column align-center align-md-start justify-center">
					<h1 class="mb-5">Social Media</h1> 
					<div class="d-flex flex-row">
						<v-btn :class="`menu-item item-${index} my-3 mr-5`"
							v-for="(item, index) in socialMedia"
							:key="item.name"
							:id="`item-${index}`"
							:href="item.url"
							icon
							link
						>
							<v-icon dark link>{{`mdi-${item.name}`}}</v-icon>
						</v-btn>
					</div>
				</div>
			</v-col>-->
			
		</div>
		<div class="footer-legal">
			<span>Calnorthex Concrete &copy; {{ new Date().getFullYear()}} | A Lotus Team Developmet</span>
		</div>
	</v-footer>
</template>

<script>
export default {
  name: 'Footer',
	props: {
		navItems: {
			type: Array,
			default: () => [],
			require: false
    }
	},
  data(){
    return {
      menuSelection: 0,
		socialMedia: [
			{ name: 'facebook', url: '' },
			{ name: 'instagram', url: '' },
			//{ name: 'twitter', url: '' }
		]
    }
  },
  computed:{
	isHome(){
		if(this.$route.path == '/'){
			return true
		}else{
			return false
		}
	}
},
  methods: {
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
	}
  }

}
</script>

<style lang="sass" scoped>
.v-footer
	display: flex
	flex-direction: column
	background-color: $dark-black!important
	padding: 0
	margin: 0
	cursor: default
.footer-legal 
	width: 100% 
	text-align: center 
	height: 60px
	background-color: $darker-black
	color: $light-gray
	line-height: 14px
	padding: 20px 10px
.footer-wrap
	width: 100%
	display: flex 
	height: fit-content
	flex-direction: column 
	background-color: $dark-black!important
	color: white
	padding: 25px 0
	@include laptop 
		flex-direction: row 

	h1 
		font-size: 1rem 
		color: $white-90
		letter-spacing: 3px
		text-transform: uppercase

	span 
		font-size: 1rem
		color: $white-80
	
	.cursor-pointer
		cursor: pointer

	.v-icon
		cursor: pointer
    
	.menu-item
		position: relative
		background: $dark-black
		text-align: left
		color: white !important
		text-decoration: none
		cursor: default
		span:hover
			color: $base-red!important
			letter-spacing: 3px
			font-weight: bold
			

	.menu-item.active 
		color: $base-red
		//background-color: $base-red
	.footer-contact
		display: flex 
		flex-direction: column 
		color: white

	// Icons 

	.icon-email
		width: 25px
		height: 25px
		mask: url('../assets/images/icons/mail.svg')
		mask-size: cover
		background-color: $white-80
		margin: auto
		margin-right: 10px

	.icon-phone
		width: 25px
		height: 25px
		mask: url('../assets/images/icons/phone.svg')
		mask-size: cover
		background-color: $white-80
		margin: auto
		margin-right: 10px
</style>