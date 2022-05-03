import store from '../store/modules/counter'; 

export default {
    
    methods: {
        plus() {
            store.dispatch('incrementAsync')
        },
        less() {
            store.dispatch('decrementAsync')
        }
    },
    computed: {
        counted() {
            return store.state.count
        }
    }, 
    template: `
        <div>
            <button @click="plus()">Plus</button>
            <button @click="less()">Less</button>
            <p>{{ counted }}</p>
        </div>
    `
}