import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue'
import store from './store';
import Addresses from './components/Address';

import $ from 'jquery';
import PopperJs from 'popper.js';
window.jQuery = window.$ = $;
window.Popper = PopperJs;

Vue.use(BootstrapVue); 

new Vue({
  el: '#app',
  store,
  components: { Addresses },    
  template: `
    <div>
      <Addresses></Addresses>
    </div>
  `
})
