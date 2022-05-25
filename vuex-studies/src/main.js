import Vue from 'vue';
import store from './store';
import Addresses from './components/Address';
import Products from './components/Products'; 
import Cart from './components/Cart'; 
import Nav from './components/Nav'; 
import router from './router'

import $ from 'jquery';
import PopperJs from 'popper.js';
window.jQuery = window.$ = $;
window.Popper = PopperJs;

require('vue-style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
  el: '#app',
  store,
  router,
  components: { Nav, Addresses, Products, Cart },    
  template: `
    <div>
      <Nav></Nav>
      <Products></Products>
    </div>
  `
  // template: `
  //   <div>
  //     <Addresses></Addresses>
  //   </div>
  // `
})
