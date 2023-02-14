<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title: '블랙 핑크'" page-default-back-link="/Blackpink">
        <h2 v-if="!loadedMemory">No se encontro información a detalle sobre el id</h2>
        <blackpink-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></blackpink-overview>
    </base-layout>
</template>
<script>
import BlackpinkOverview from "../components/blackpink/BlackpinkOverview.vue";
    export default {
        components: {
            BlackpinkOverview,
        },

        data(){
            return{
                //memoryId: null
                memoryId: this.$route.params.id
            }
        },
        computed:{
            loadedMemory(){
                return this.$store.getters.memory(this.memoryId);
            }
        },
        watch:{
            '$route'(currentRoute){
                this.memoryId = currentRoute.params.id;
            }
        }
    }
</script>
<style>

</style>