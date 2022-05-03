const state = () => ({
    todos: [
        {id: 1, text: 'Task One', done: true},
        {id: 2, text: 'Task Two', done: false},
        {id: 3, text: 'Task Three', done: true},
        {id: 4, text: 'Task Four', done: false}        
    ]
})

const getters = {
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

export default {
    namespaced: true, 
    state, 
    getters
}