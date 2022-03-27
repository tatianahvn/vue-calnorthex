<template>
    <v-card
        color="#232323"
        dark
    >
        
        <v-img :src="require(`@/assets/images/gallery/${dataProject.image}`)" class="custom-card-asset">
            <v-card-subtitle></v-card-subtitle>
        </v-img>
        <v-card-actions class="d-flex justify-space-between">
            <v-card-title>
                {{ dataProject.title }}
            </v-card-title>
            <v-btn outlined @click="openPageProject" class="mr-4">
                Learn more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        dataProject: {
            type: Object,
            default: () => {},
            require: true
        }
    },
    methods:{
        openPageProject(){
        /* 
            Note: Inside of a Vue instance, you have access to the router instance as $router. You can therefore call this.$router.push.
        */
        window.scrollTo(0, top)
        this.$router.push({
            path: '/jobs'
        })

        this.$store.commit('setDetails', this.dataProject)

        }
    }
}
</script>

<style lang="sass" scoped>
    .custom-card-asset
        height: 450px
        &::after
            content: ''
            width: 100%
            height: 100% 
            position: absolute 
            top: 0
            left: 0
            //background-color: rgba(0, 0, 55, 0.5)
</style>