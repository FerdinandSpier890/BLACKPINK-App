<template>
    <ion-item :router-link="`/Blackpink/${bp.id}`" >
        <ion-thumbnail slot="end">
            <ion-img :src="bp.image" :alt="bp.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ bp.title }}
        </ion-label>
    </ion-item> 
</template>

<script>
import {  
    IonItem, 
    IonImg,
    IonLabel, 
    IonThumbnail
    
} from '@ionic/vue';
export default {
    props: ["bp"],

    components: { 
        IonItem, 
        IonImg,
        IonLabel, 
        IonThumbnail
    },
}
</script>