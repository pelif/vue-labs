
import store from '../store/modules/todo'

export default {    
    data() {
        return {
            IdSearch: null,
            todo: null
        };
    }, 
    computed: {
        doneTodos() {            
            return store.getters.doneTodosCount            
        },
        doneTodosCount() {
            return store.getters.doneTodos
        },
        todoById() {
            return store.getters.getTodoById(IdSearch)
        }
    },
    methods: {
        getTodo() {
            this.todo = store.getters.getTodoById(this.IdSearch)                 
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