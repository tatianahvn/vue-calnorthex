
<template>
    <section class="videoConcrete container mb-15">
        <div class="d-flex flex-column my-10 justify-center align-center">
            <p class="header-min mb-0">PROFESSIONAL CONCRETE</p>
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
            letter-spacing: 3px
            text-transform: uppercase
            color: black
        .header-title
            font-size: 1.5rem
            font-weight: 600
            margin-bottom: 25px
            line-height: 1.5rem
            text-align: center
            padding: 1rem
            @include laptop
                font-size: 2.5rem
                margin-botom: 20px
                padding: 0
        p 
            font-size: 1.2rem
            line-height: 1.5rem
            @include laptop
                font-size: 1.5rem
                line-height: 2rem
</style>