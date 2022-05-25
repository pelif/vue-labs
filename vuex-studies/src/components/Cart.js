import store from '../store'

export default {
    data() {
        return {
            productsOfCart: []
        }
    },
    computed: {
        getProductsOfCart() {
            this.productsOfCart = this.$store.state.Products.productsAdded
            return this.productsOfCart
        }
    },  
    methods: {
        removeOfCart(idProduct) {
            let res = this.productsOfCart.filter(el => el.id === idProduct);             
            if(res[0]) {
                this.$store.dispatch({
                    type: 'removeOfCart',
                    param: res[0]
                });
            }
        }
    },    
    template: `
        <div>
            <div class="row">
                <table class="table table-bordered">
                    <thead>
                        <tr>                            
                            <th>Image</th>
                            <th>Nome</th>
                            <th>Preço</th>    
                            <th>Remover</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in getProductsOfCart">
                            <td>
                                <img 
                                    :src="product.image"                                     
                                    :title="product.Description"
                                    width="55"
                                    height="55" 
                                    style="border-radius:50px;">
                            </td>
                            <td>{{ product.name }}</td>
                            <td>R$ {{ product.price.toFixed(2).replace('.',',') }}</td>
                            <td>
                                <button 
                                    class="btn btn-default"
                                    @click="removeOfCart(product.id)">
                                    X
                                </button>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
}