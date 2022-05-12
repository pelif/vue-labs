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

const Products = {
    state: () => ({
        id: null,
        products: null,
    }),
    mutations: {
        setProducts (state, dataProducts) {
            state.products = dataProducts
            console.log(state.products)
        }
    },
    actions: {
        'all'(context) {
            Vue.http
               .get(`http://localhost:3000/products`)
               .then(response => {
                   setTimeout(() => {
                        let dataProducts = response.data;
                        context.commit('setProducts', dataProducts); 
                   })
               }).catch((error) => {
                   alert(error); 
               });
        }
    }
}

export default new Vuex.Store({
    modules: {
        Addresses: Addresses,
        Products: Products
    }
})
