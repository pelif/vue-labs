import store from './store'; 

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
            return store.state.counter.count
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