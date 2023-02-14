import { createStore } from 'vuex';

const store = createStore( { 
    state(){
        return{
            blackpink:[
                {
                    id: 'bp1', 
                    image: 'https://i.pinimg.com/originals/45/4a/ef/454aefaac7f6baaebd50e67b254cbe41.jpg', 
                    title: 'Kim Jisoo - 김지수', 
                    description: 'Es una cantante, actriz, modelo y presentadora surcoreana, miembro del grupo Blackpink.'
                },
                {
                    id: 'bp2', 
                    image: 'https://seriestation.com/wp-content/uploads/Lalisa-Manoban-Citas-Novios-cronologia-de-relaciones-y-mas.jpg', 
                    title: 'Lalisa Manobal - ปราณปรียา มโบาล', 
                    description: 'Es una rapera, modelo, cantante y bailarina tailandesa. Es integrante del grupo femenino Blackpink'
                },
                {
                    id: 'bp3', 
                    image: 'https://mui.today/__export/1601622398733/sites/mui/img/2020/10/02/blackpink-rose-went-to-book-store-to-find-her-dazed-magazine.jpg_925846049.jpg', 
                    title: 'Roseanne Park - 박채영', 
                    description: 'Es una cantante, modelo, compositora y bailarina neozelandesa de origen coreano'
                },
                {
                    id: 'bp4', 
                    image: 'https://i.pinimg.com/originals/7b/5c/01/7b5c0121f8939ff5408f67a58b23881a.jpg', 
                    title: 'Kim Jennie - 김제니', 
                    description: 'Es una cantante, rapera, modelo y bailarina surcoreana.'
                },
            ],
        };
    },

    mutations:{
        addBlackpink(state, blackpinkData){
            const newBlackpink = {
                id: new Date().toISOString(),
                title: blackpinkData.title,
                image: blackpinkData.image,
                description: blackpinkData.description
            };
            state.blackpink.unshift(newBlackpink);
        }
    },

    actions:{
        addBlackpink(context, blackpinkData){
            context.commit('addBlackpink', blackpinkData);
        }
    },

    getters: {
        blackpink(state){
            return state.blackpink;
        },

        memory(state){
            return (memoryId) => {
                return state.blackpink.find(memory => memory.id === memoryId)
            };
        }
    }
});

export default store;

