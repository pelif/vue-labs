const state = () => ({
    count: 0
})

const mutations = {
    increments (state) {
        state.count++
    },
    decrements (state) {
        state.count--
    }
}

const actions = {
    incrementAsync({ commit }) {
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

export default {
    namespaced: true,
    state,
    mutations,
    actions    
}