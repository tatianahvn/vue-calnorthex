<template>
	<section class="main-description container my-md-10">
		<div class="main-description-wrap d-flex flex-column flex-md-row">
			<v-col class="main-info pa-sm-5">
				<p class="info-title py-5">
					YOUR PROJECT SUCCESS IS OUR BUSINESS
				</p>
				<p>
					The heartbeat of our company is always our customers.
					We strive to improve and exceed expectations. <br><br v-if="windowSize.x > 960"> By listening to customers ideas or concerns
					and keeping them imformed of the process from start to finish.
				</p>
				<img src="@/assets/images/img-lg-calnorthex.png" class="lg-calnorthex"/>
				<!--
				<div class="squares" v-show="windowSize.x > 960 ? true : false">
					<div class="square-red"></div>
					<div class="square-gray"></div>
				</div>-->
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
		padding: 1rem 15px
		height: 100% 
		font-size: 1.3rem
		text-align: center
		min-height: fit-content
		@include laptop 
			padding: 1rem
			font-size: 1.5rem
			min-height: 300px 
			text-align: inherit
			min-height: 500px 
		.lg-calnorthex
			width: 70%
			margin: 10% auto 
			@include laptop
				width: 400px
				margin: 10%
		.info-title 
			font-family: $font-title
			text-transform: uppercase
			font-size: 1.5rem
			font-weight: 600
			color: $base-red
			text-align: center
			padding: 1rem
			@include laptop
				padding: 0
				font-size: 2.5rem
				text-align: left
				line-height: 2.5rem
		
		p 
			text-align: justify
			color: $common-black
			@include laptop
				text-align: left
				font-size: 1.25rem

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
			background: url('../assets/images/our_project_success.jpg')
			background-size: 240%
			background-position: 27%
			filter: grayscale(.5)
			
			@include laptop
				width: 100%
				height: 100%

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