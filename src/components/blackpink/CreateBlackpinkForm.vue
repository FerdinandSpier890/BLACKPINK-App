<template>
    <form class="ion-padding" @submit.prevent="submitForm"> 
        <ion-list>
           <ion-item>
               <ion-label position="floating">Nombre de la Integrante: </ion-label>
               <ion-input type="text" required v-model="enteredTitle"></ion-input>
           </ion-item>
           <ion-item>
               <ion-label position="floating">Imagen URL: </ion-label>
               <ion-input type="url" required v-model="enteredImgUrl"></ion-input>
           </ion-item>
           <ion-item>
               <ion-label position="floating">Descripción: </ion-label>
               <ion-textarea type="text" required rows="5" v-model="enteredDescipcion"></ion-textarea>
           </ion-item>
        </ion-list>
        <ion-button expand="block" fill="outline" shape="round" type="submit">Guardar Integrante</ion-button>
    </form>
</template>
<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
    export default{
        
        components: {
            IonList,
            IonItem,
            IonLabel,
            IonInput,
            IonTextarea,
            IonButton
        },
        emits:[
            'save-blackpink'
        ],
        data(){
            return{
                enteredTitle: '',
                enteredImgUrl: '',
                enteredDescipcion: '',
            }
        },
        methods:{
            submitForm(){
                const blackpinkData = {
                    title: this.enteredTitle,
                    image: this.enteredImgUrl,
                    description: this.enteredDescipcion,
                };
                this.$emit('save-blackpink', blackpinkData);
            }
        },
    }
</script>