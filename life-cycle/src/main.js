// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Vue from 'vue'
import App from './App.vue'
import PageTitle from './components/PageTitle.vue'; 
import NewPlay from './components/NewPlay.vue';
import TableTeams from './components/TableTeams.vue'; 
import Team from './team'; 
import DataTeam from './components/DataTeam.vue'; 
// import ModalComp from './components/ModalComp.vue';
import ModalMat from './components/ModalMat.vue';
import ScoreModalMat from './components/ScoreModalMat.vue'; 
// import ScoreModal from './components/ScoreModal.vue'; 
import LiberatorsTeams from './components/LiberatorsTeams.vue';
import RelegatedTeams from './components/RelegatedTeams.vue'; 
import $ from 'jquery'; 
// import PopperJs from 'popper.js'; 
import _ from 'lodash'; 

window.jQuery = window.$ = $;
// window.Popper = PopperJs; 
// require('bootstrap'); 
import 'materialize-css/dist/css/materialize.min.css'; 
window.M = require('materialize-css'); 

Vue.config.productionTip = false

Vue.filter('ucwords', (value) => value.charAt(0).toUpperCase() + value.slice(1));

Vue.component('page-title', PageTitle); 
Vue.component('new-play', NewPlay); 
Vue.component('data-team', DataTeam); 
Vue.component('table-teams', TableTeams); 
// Vue.component('modal-comp', ModalComp); 
// Vue.component('score-modal', ScoreModal); 
Vue.component('modal-mat', ModalMat); 
Vue.component('score-modal-mat', ScoreModalMat); 
Vue.component('liberators-teams', LiberatorsTeams); 
Vue.component('relegated-teams', RelegatedTeams); 

new Vue({  
  render: h => h(App),
  provide() {
    return {
        teamsCollection: [
            new Team('América MG', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/america_mg_60x60.png?raw=true'),
            new Team('Atlético PR', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/atletico-pr_60x60.png?raw=true'),
            new Team('Atlético MG', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/atletico_mg_60x60.png?raw=true'),
            new Team('Bahia', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/bahia_60x60.png?raw=true'),
            new Team('Botafogo', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/botafogo_60x60.png?raw=true'),
            new Team('Ceará', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/ceara_60x60.png?raw=true'),
            new Team('Chapecoense', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/chapecoense_60x60.png?raw=true'),
            new Team('Corinthians', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/corinthians_60x60.png?raw=true'),
            new Team('Cruzeiro', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/cruzeiro_60x60.png?raw=true'),
            new Team('Flamengo', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/flamengo_60x60.png?raw=true'),
            new Team('Fluminense', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/fluminense_60x60.png?raw=true'),
            new Team('Gremio', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/gremio_60x60.png?raw=true'),
            new Team('Internacional', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/internacional_60x60.png?raw=true'),
            new Team('Palmeiras', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/palmeiras_60x60.png?raw=true'),
            new Team('Paraná', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/parana_60x60.png?raw=true'),
            new Team('Santos', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/santos_60x60.png?raw=true'),
            new Team('São Paulo', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/sao_paulo_60x60.png?raw=true'),
            new Team('Sport', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/sport_60x60.png?raw=true'),
            new Team('Vasco', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/vasco_60x60.png?raw=true'),
            new Team('Vitória', 'https://github.com/schoolofnetcom/vue2-rev3/blob/master/assets/vitoria_60x60.png?raw=true')
        ]
    }
  },    
  computed: {
      liberatorsTeams() {
          return this.teams.slice(0,6)
      },
      relegated() {
          return this.teams.slice(16,20)
      },       
      orderedTeams() {
          return _.orderBy(this.teams, this.order.fields, this.order.ordering);
      }
  },     
  filters: {
      balance(team) {
          return team.gm - team.gs;
      },
      ucwords(value) {
          return value.charAt(0).toUpperCase() + value.slice(1)
      }
  },  
}).$mount('#app')
