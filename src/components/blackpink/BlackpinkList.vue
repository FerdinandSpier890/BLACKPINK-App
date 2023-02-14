<template>
    <ion-list>
        <blackpink-list-item v-for="bp in blackpink" :key="bp.id" :bp="bp">

        </blackpink-list-item> 
    </ion-list>
</template>

<script>
import {   
    IonList,
} from '@ionic/vue';
import BlackpinkListItem from './BlackpinkListItem.vue';
export default{

    props: ["blackpink"],

    components: {
        IonList,
        BlackpinkListItem
    },
}
</script>