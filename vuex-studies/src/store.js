import Vue from 'vue';
import Vuex from 'vuex'; 
import VueResource from 'vue-resource'; 

Vue.use(Vuex); 
Vue.use(VueResource); 

const Addresses = {
    state: () => ({
        zipCode: null,
        address: null,        
    }),
    mutations: {
        setAddress (state, dataAddress) {
            state.address = dataAddress;             
        }
    }, 
    actions: {
        'loadAddress'(context, zipcode) {
            let cep = zipcode.zipcode; 
            Vue.http
               .get(`https://viacep.com.br/ws/${cep}/json/`)
               .then(response => {
                   setTimeout(() => {
                        let dataAddress = response.data; 
                        context.commit('setAddress', dataAddress);                         
                   })                   
                }).catch((error) =>  {
                    alert(error); 
                }); 
            
        }
    }
}

export default new Vuex.Store({
    modules: {
        Addresses: Addresses
    }
})
