import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Counter from './Counter'
import Todo from './Todo'

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
