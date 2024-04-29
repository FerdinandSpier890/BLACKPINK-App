<template>
    <base-layout page-title="Integrantes" page-default-back-link="/Blackpink">
        <create-blackpink-form @save-blackpink="saveBlackpink"></create-blackpink-form>
    </base-layout>
</template>
<script>
import BaseLayout from '../components/base/BaseLayout.vue';
import CreateBlackpinkForm from '../components/blackpink/CreateBlackpinkForm.vue';
    export default{
        components: {
            BaseLayout,
            CreateBlackpinkForm
        },
        methods: {
            saveBlackpink(blackpinkData){
                this.$store.dispatch('addBlackpink', blackpinkData);
                this.$router.replace('/Blackpink');
            } 
        }
    }
</script>