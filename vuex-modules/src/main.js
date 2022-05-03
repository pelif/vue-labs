import Vue from 'vue'
import store from './store'
import Counter from './components/Counter'
import Todo from './components/Todo'

new Vue({
  el: '#app',
  store,
  components: { Counter, Todo },
  computed: {
    counted() {
      return this.$store.state.count
    }
  },
  template: `
    <div>
      <todo></todo>
      <hr>
      <counter></counter>
    </div>
  `
})
