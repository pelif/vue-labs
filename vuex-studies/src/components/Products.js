import store from '../store'
import Cart from '../components/Cart'

export default {
    components: { Cart }, 
    created() {
        this.$store.dispatch('all');        
    },
    data() {
        return {
            id: null, 
            result: null,
            idProduct: null            
        }
    },
    computed: {
        getProducts() {
            this.result = this.$store.state.Products.products
            return this.result;
        },
        getView() {
            return this.$store.state.Products.view
        }        
    },
    methods: {
        addProduct(index) {
            let idProduct = this.$refs.btn[index].getAttribute('idProd'); 
            let res = this.result.filter(el => el.id == idProduct);
            this.$store.dispatch({
                type: 'add', 
                product: res[0]
            });                
            this.$refs.btn[index].setAttribute('disabled', 'disabled');                
        }
    },
    template: `
        <div>
            <div class="container mt-5" v-if="getProducts != null && getView == 'products'">
                <div class="row">
                    <div class="card-group">
                        <div class="card ml-2" v-for="(product,index) in getProducts">
                            <img 
                                :src="product.image"
                                class="card-img-top"                                 
                                width="220" 
                                height="270"
                                :title="product.Description">
                            <div class="card-body">
                                <h5 class="card-title">{{ product.name }}</h5>
                                <p class="card-text"><small>{{ product.Description }}</small></p>                                                                
                            </div>
                            <div class="card-footer align-content-md-center">
                                <center><strong>R$ {{ product.price.toFixed(2).replace('.',',') }}</strong></center>
                               <button  
                                    ref="btn"
                                    @click="addProduct(index)"
                                    :idProd="product.id"
                                    class="btn btn-success col-md-12">
                                    Adicionar ao Carrinho
                                </button>
                                
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="container mt-5" v-if="getView == 'cart'">
                <Cart></Cart>
            </div>
        </div>`   
}