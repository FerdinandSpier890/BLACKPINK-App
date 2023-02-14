<template>
    <base-layout page-title="BLΛƆKPIИK">
        <template v-slot:actions-end>
           <ion-button router-link="/Blackpink/add">
               <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button> 
        </template>
        <blackpink-list :blackpink="blackpink">
        </blackpink-list>
    </base-layout>
</template>
<script>

import BaseLayout from '@/components/base/BaseLayout.vue';
import BlackpinkList from '../components/blackpink/BlackpinkList.vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons'
export default {
    components: { 
        BaseLayout,
        BlackpinkList,
        IonButton,
        IonIcon,

    },

    data(){
        return { 
            add 
        };
    },
    
    computed: {
        blackpink(){
            return this.$store.getters.blackpink;
        }
    }
};
</script>
