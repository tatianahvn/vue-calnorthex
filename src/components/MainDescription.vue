<template>
	<section class="main-description container my-md-10">
		<div class="main-description-wrap d-flex flex-column flex-md-row">
			<v-col class="main-info pa-sm-5 pa-md-8">
				<p class="info-title py-5">
					YOUR PROJECT SUCCESS IS OUR BUSINESS
				</p>
				<p>
					The heartbeat of our company is always in people, whether it’s our customers or employees. 
					We strive to improve and exceed expectations. We know your site schedules are critical therefore you can count on us to supply and install your underfloor heating system on time, 
					within budget and with our outstanding service.
				</p>
				<div class="squares" v-show="windowSize.x > 960 ? true : false">
					<div class="square-red"></div>
					<div class="square-gray"></div>
				</div>
			</v-col >
			<v-col class="complement pa-0">
					<div class="bg-portrait"></div>
			</v-col>
		</div>
	</section>
</template>

<script>
export default {
	data:() => ({
		windowSize: {
			x: 0,
			y: 0
		}
	}),
	mounted(){
		this.onResize()
	},
	methods: {
		onResize(){
			this.windowSize = { x: window.innerWidth, y: window.innerHeight }
		}
	}
}
</script>

<style lang="sass">
.main-description-wrap
	width: 100%
	height: auto
	.main-info
		width: 100%
		padding: 2rem
		height: 100% 
		font-size: 1.5rem
		text-align: center
		@include laptop 
			padding: 1rem
			min-height: 300px 
			text-align: left
			min-height: 650px 

		.info-title 
			font-family: $font-title
			letter-spacing: .18rem
			text-transform: uppercase
			line-height: 2rem
			font-size: 2rem
			font-weight: 600
			color: $base-red
			text-align: center
			@include laptop
				text-align: left
				line-height: 2rem
		
		p 
			line-height: 2.5rem
			text-align: justify
			color: $common-black
			@include laptop
				text-align: left

	.complement  
		position: relative
		width: 100%
		padding: 1rem
		min-height: 45vh
		@include laptop
			min-height: 550px 
		.bg-portrait
			position: relative
			width: 100%
			height: 45vh
			margin: auto
			background: url('../assets/images/C1.jpg')
			background-size: cover 
			background-position: center
			z-index: 1
			@include laptop
				width: calc(100% - 20px)
				height: calc(100% - 15px)

		&:before
			@include laptop
				content:''
				width: calc(100% - 20px)
				height: calc(100% - 20px)
				margin: auto
				z-index: 1
				position: absolute
				background-color: $base-red 
				right: 0px
				bottom: 0px
			
	.squares 
		position: relative
		display: flex 
		flex-direction: row 
		justify-content: center
		align-content: center
		width: 100% 
		margin-top: 50px
		margin-bottom: 30px
		opacity: 0.8
		min-height: 80px
		@include laptop
			margin-top: 50px
		.square-red
			position: absolute
			width: 50px
			height: 50px 
			border: 5px solid $base-red 
			transform: rotate(45deg)
			right: calc(50% - 10px)
		.square-gray
			position: absolute 
			width: 50px
			height: 50px 
			border: 5px solid $base-gray
			transform: rotate(45deg)
			left: calc(50% - 10px)
			z-index: 2

</style>