import store from '../store'

export default {
    created() {
        this.$store.dispatch('all');
    },
    data() {
        return {
            id: null, 
            result: null
        }
    },
    computed: {
        getProducts() {
            return this.$store.state.Products.products
        }    
    },
    template: `
        <div>
            <div v-if="getProducts != null">
                <strong>Has Products!</strong>
            </div>        
        </div>
    `
}