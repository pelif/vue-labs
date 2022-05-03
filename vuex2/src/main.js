import Vue from 'vue'
import store from './store'
import Counter from './Counter'
import Todo from './Todo'

new Vue({
  el: '#app',  
  store, 
  components: { Counter, Todo }, 
  template: `
    <div>
      <todo></todo>
      <hr>
      <counter></counter>
    </div>
  `
})