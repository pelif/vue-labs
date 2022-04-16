import Vue from 'vue'; 
import Vuex from 'vuex'; 

Vue.use(Vuex);

const counter = {
    state: () => ({
        count: 0
    }),
    mutations: {
        increments (state) {
            state.count++
        },
        decrements (state) {
            state.count--
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increments')
            }, 300)
        }, 
        decrementAsync ({ commit }) {
            setTimeout(() => {
                commit('decrements')
            }, 300)
        }
    }
}

const todo = {
    state: () => ({
        todos: [
            {id: 1, text: 'Task One', done: true},
            {id: 2, text: 'Task Two', done: false},
            {id: 3, text: 'Task Three', done: true},
            {id: 4, text: 'Task Four', done: false}        
        ]
    }),
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id == id)
        }     
    }
}

export default new Vuex.Store({
    modules: {
        counter: counter,
        todos: todo
    }    
})