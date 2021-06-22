<template>
  <section class="main-banner" id="home">
    <div class="filter-layout"></div>
    <div class="info-banner">
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
      title: 'CALNORTHEX CONCRETE',
      description: 'Velit velit dolore mollit proident ea ipsum cupidatat nulla irure nisi ad sit minim sunt. Proident culpa eiusmod excepteur fugiat mollit minim in ullamco dolor enim in in.',
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
	height: 80vh
	max-height: 600px
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
		background-color: rgb(0 0 0 / 45%)

	.info-banner 
		width: 100% 
		max-width: 350px 
		text-align: center
		z-index: 1
		@include laptop 
			max-width: 800px

		h1
			color: white 
			font-size: 1rem 
			margin-bottom: 15px 
			text-align: center
			font-family: $font-title
			font-weight: 500
			@include laptop
				font-size: 3.5rem 

		p 
			color: #fff
			line-height: 1.2
			margin-bottom: 40px
			font-size: 1.3rem
			font-weight: 400
			text-align: justify
			@include laptop 
				font-size: 1.3rem
				text-align: center

		a 
			color: white 
			text-decoration: none 
			background-color: $base-red 
			padding: 15px 40px 
			display: inline-block
			font-weight: 600
			text-align: center
			font-family: $font-title
			text-transform: uppercase


@keyframes banner 
	0%, 30%
		background-image: url('../assets/images/hero-animated/slider05.jpg')
	
	35%, 60%
		background-image: url('../assets/images/hero-animated/slider02.jpg')
	
	65%, 100%
		background-image: url('../assets/images/hero-animated/slider04.jpg')

</style>
