import Vue from 'vue';
import store from './store';
import Addresses from './components/Address';

import $ from 'jquery';
import PopperJs from 'popper.js';
window.jQuery = window.$ = $;
window.Popper = PopperJs;

require('vue-style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

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
