<template>
    <div class="testimonial-card mr-3 pa-5">
        <p class="testimonial-name">{{ dataCard.name}}</p>
        <div class="testimonial-rank d-flex mb-2" role="img" aria-label="Rated 5 out of 5 stars">
            <span v-for="n in 5" :key="n"> 
                <img src="@/assets/images/icons/star.png" class="img-star" alt=""/>
            </span>
        </div>
        <p class="testimonial-text">
            {{ dataCard.review }}
        </p>
    </div>
</template>
<script>
    export default {
        props: {
            dataCard: {
                type: String, 
                default: "",
                require: true
            } 
        }
    }
</script>
<style scoped lang="sass">
    .testimonial-card
        position: relative 
        display: flex 
        flex-direction: column
        width: 90% 
        min-height: 400px
        background-color: white
        color: $common-black
        cursor: default
        .img-star
            width: 20px
            height: 20px
            padding-right: 2px
        .testimonial-name
            font-size: 1rem
            font-weight: 600
            color: $soft-black
        .testimonial-text
            font-size: 16px

</style>