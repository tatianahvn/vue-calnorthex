<template>
	<section class="main-banner" id="home">
		<div class="filter-layout"></div>
		<div class="info-banner">
			<div class="info-logo">
				<!-- Logo injected by background styles -->
			</div>
			<h1>{{ title }}</h1> 
			<p>{{ description }}</p> 
			<a href="#">{{ ctaBtn }}</a>
		</div>
	</section>
</template>
<script>

export default {
	name: 'MainBanner',
		data() {
		return {
			title: 'YOU DREAM IT & WE BUILD IT',
			description: 'Our Team Specialize in Design and Build Concrete Solutions',
			ctaBtn: 'Show more',
		}
	},
}
</script>
<style lang="sass" scoped>
.main-banner 
	position: relative
	display: flex 
	flex-direction: column 
	justify-content: center 
	align-items: center
	width: 100% 
	height: 85vh
	max-height: 700px
	animation: banner 20s infinite linear alternate
	background-size: auto 100%
	background-position: center
	@include laptop
		background-size: cover // cut photos for the same height

	.filter-layout 
		position: absolute 
		width: 100% 
		height: 100% 
		top: 0
		left: 0
		background-color: rgb(0 0 0 / 35%)

	.info-banner 
		width: 100% 
		max-width: 350px 
		text-align: center
		z-index: 1
		@include laptop 
			max-width: 800px

		h1
			font-size: 1.2rem
			margin: 2rem auto
			color: white 
			text-align: center
			font-family: $font-title
			font-weight: 600
			@include laptop
				font-size: 2.5rem
				margin: 1rem auto 

		p 
			color: #fff
			line-height: 1.2
			margin-bottom: 40px
			font-size: 1.3rem
			font-weight: 400
			text-align: center
			@include laptop 
				font-size: 1.3rem
				text-align: center

		a 
			color: white 
			text-decoration: none 
			background-color: $base-red 
			padding: 10px 35px 
			display: inline-block
			font-weight: 600
			text-align: center
			font-family: $font-title
			text-transform: uppercase

	.info-logo
		mask: url('../assets/images/img-lg-calnorthex.png')
		mask-size: cover
		background-color: white
		margin: auto
		width: 70vw
		height: 20vw

		@include laptop
			width: 445px
			height: 145px
		


@keyframes banner 
	0%, 30%
		background-image: url('../assets/images/hero-animated/slider05.jpg')
	35%, 60%
		background-image: url('../assets/images/hero-animated/slider02.jpg')
	65%, 100%
		background-image: url('../assets/images/hero-animated/slider04.jpg')

</style>
