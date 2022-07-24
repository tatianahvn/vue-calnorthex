
<template>
    <section class="videoConcrete container mb-15">
        <div class="d-flex flex-column my-10 justify-center align-center">
            <p class="header-min pb-0">PROFFESIONAL CONCRETE</p>
            <p class="font-title header-title">HOW CONCRETE IS MADE?</p>
        </div>
        <video width="100%" controls>
                <source :src="require('@/assets/how-concrete-is-made.mp4')" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
        </video> 
    </section>
</template>
<script>
</script>
<style lang="sass" scoped>
    .videoConcrete 
        display: flex 
        flex-direction: column 
        justify-content: center 
        align-items: center
        .header-min
            font-size: 1rem
            text-transform: uppercase
            letter-spacing: 5px
            color: black
        .header-title
            font-size: 2.5rem
            letter-spacing: 5px
            font-weight: 500
            margin-bottom: 25px
        @include laptop
            margin-botom: 20px
        p 
            font-size: 1.2rem
            line-height: 1.5rem
            @include laptop
                font-size: 1.5rem
                line-height: 2rem
</style>