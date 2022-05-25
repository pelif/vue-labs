import store from '../store'

export default {     
    data() {
        return {
            zipCode: null,
            result: null
        }
    },
    computed: {
        getAddresses() {
            return this.$store.state.Addresses.address
        }
    },
    methods: {        
        setZipCode() {            
            this.$store.dispatch({
                type: 'loadAddress',
                zipcode: this.zipCode
            });              
        }
    },
    template: `
        <div>       
            <div class="col-md-4">     
                <div class="form-group">                
                    <input                 
                        type="text" 
                        class="form-control" 
                        name="cep" 
                        id="cep"
                        v-model="zipCode">
                    <button 
                        @click="setZipCode" 
                        class="btn btn-primary">
                        Buscar
                    </button>

                    <br>
                    <strong v-if="zipCode != null && zipCode.length == 7">{{ zipCode }}</strong>
                    <br>
                    
                    <div v-if="getAddresses != null">
                    <p><b>Cep</b>: {{ getAddresses.cep }}</p>
                    <p><b>Logradouro</b>: {{ getAddresses.logradouro }}</p>
                    <p><b>Bairro</b>: {{ getAddresses.bairro }}</p>
                    <p><b>Cidade</b>: {{ getAddresses.localidade }}</p>
                    <p><b>Estado</b>: {{ getAddresses.uf }}</p>
                    </div>
                </div>    
            </div>            
        </div>
    `
}