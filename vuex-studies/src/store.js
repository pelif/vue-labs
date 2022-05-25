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
        added: 0, 
        productsAdded: [],
        view: 'products'
    }),
    mutations: {
        setProducts (state, dataProducts) {
            state.products = dataProducts                
        },
        setProductsAdded(state, product) {            
            let test = state.productsAdded.filter(el => el.id == product.product.id);             
            if(test.length == 0) {
                state.productsAdded.push(product.product)
            }                        
        },
        updateView(state) {
            if(state.view == 'products') {
                state.view = 'cart';
            } else {
                state.view = 'products';
            }            
        },
        removeProductAdded(state, param) {
            let prod = param.param; 
            let count = 0; 
            state.productsAdded.map((el) => {
                if(prod.id === el.id) {
                    state.productsAdded.splice(count, 1); 
                }
                count++;
            });
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
        },
        'add'(context, product) {               
            context.commit('setProductsAdded', product); 
        },
        'setView'(context) {
            context.commit('updateView');
        },
        'removeOfCart'(context, param) {
            context.commit('removeProductAdded', param)
        }
    }
}

export default new Vuex.Store({
    modules: {
        Addresses: Addresses,
        Products: Products
    }
})
