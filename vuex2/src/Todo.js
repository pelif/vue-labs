import store from './store'

export default {
    data() {
        return {
            IdSearch: null,
            todo: null
        };
    }, 
    computed: {
        doneTodos() {            
            return this.$store.getters.doneTodosCount            
        },
        doneTodosCount() {
            return this.$store.getters.doneTodos
        },
        todoById() {
            return this.$store.getters.getTodoById(IdSearch)
        }
    },
    methods: {
        getTodo() {
            this.todo = store.getters.getTodoById(this.IdSearch)     
            console.log(this.todo)
        }
    },
    template: `
        <div>
            <strong v-if="todo != null">{{ todo.id + ' --> ' + todo.text }}</strong>
            <br>
            <input 
                type="text" 
                name="id" 
                size="3"
                v-model="IdSearch">
            <button @click="getTodo">Search</button>
        </div>
    `
}