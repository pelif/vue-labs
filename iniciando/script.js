Vue.filter('ucwords', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
});


Vue.component('my-app', {
    template: `
    <div class="container">       
        <titulo></titulo>
        <div class="row">
            <div class="col-md-12">
                <new-play :teams="teams"></new-play>
            </div>            
        </div>
    
        <div class="row">            
            <div class="col-md-12" v-show="view === 'table'">
                <table-teams :teams="teams"></table-teams>
            </div>
        </div>
    </div>
    `,
    data() {
        return {            
            houseTeam: null,
            outTeam: null,
            teams: this.teamsCollection,
            view: 'table' 
        };   
    },
    inject: ['teamsCollection'],
    methods: {                
        endingPlay() {
            let byHouse = this.newPlay.byHouse;
            var goalsOfHouse = parseInt(this.newPlay.byHouse.goals); 
            var outSideGoals = parseInt(this.newPlay.outHouse.goals); 
            var AdversaryTeam = this.newPlay.outHouse.team;
            var TeamOfHouse = byHouse.team;
            TeamOfHouse.endPlay(AdversaryTeam, goalsOfHouse, outSideGoals); 
            this.view = 'table';
        },
        showScore({houseTeam, outTeam}) {
            this.houseTeam = houseTeam;
            this.outTeam = outTeam;
            this.view = 'form';
        }                 
    }
})

Vue.component('titulo', {
    template: `
    <div class="row">
    <h3>
        Champ Brasileiro Série A - 2018 
    </h3>
    </div>
    `
});

Vue.component('dteam', {
    props : ['team','inverse'],
    template: `
    <div style="display:flex; flex-direction:row">
    <img class="logo" :src="team.logo" :style="{order: inverse == 'true' ? 2 : 1}">
    <span :style="{order: inverse == 'true' ? 1 : 2}">{{ team.name }}</span>
    </div>
    `    
});


Vue.component('table-teams', {
    // props:['teams'],
    data() {
        return {
            search: '',
            order: {
                fields: ['points', 'gm', 'gs', 'balance'],
                sort: ['desc', 'desc', 'desc', 'desc']
            },
            teams: this.teamsCollection          
        }
    },
    inject: ['teamsCollection'],
    template: `
        <div>        
        <input type="text" name="" v-model="search" class="form-control">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th v-for="(field, index) in order.fields">
                        <a href="#" @click.prevent="ordering(index)">{{ field | ucwords }}</a>
                    </th>                                       
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(team,index) in teamOrder" 
                    :class="{'table-success': index < 6}" 
                    :style="{'font-size': index<6 ? '17px' : '15px'}">

                    <td><dteam :team="team"></dteam></td>
                    <td>{{ team.points }}</td>
                    <td>{{ team.gm }}</td>
                    <td>{{ team.gs }}</td>
                    <td>{{ team.balance }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <div class="row">
        <div class="col-md-6">
            <liberators-teams :teams="teamOrder"></liberators-teams>
        </div>

        <div class="col-md-6">
        <relegated-teams :teams="teamOrder"></relegated-teams>
        </div>
    </div>        
        </div>        
    `,
    computed: {
        teamOrder() {
            let teams = _.orderBy(this.orderedTeams, this.order.fields, this.order.sort)
            let self = this;
            return _.filter(teams, function(team) {
                let search = self.search.toLowerCase();
                return team.name.toLowerCase().indexOf(search) >= 0;
            })
        },
        orderedTeams() {
            return _.orderBy(this.teams, this.order.fields, this.order.ordering);
        }
    },
    methods: {
        ordering(index) {
            this.$set(this.order.sort, index, this.order.sort[index] == 'desc' ? 'asc' : 'desc');
        }     
    },
    filters: {
        ucwords(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})

Vue.component('liberators-teams', {
    props: ['teams'],
    template: `
        <div>
            <h3>Classificados para Libertadores</h3>
            <ul>
                <li v-for="team in liberatorsTeams">
                    <dteam :team="team"></dteam>
                </li>
            </ul>
        </div>
    `,
    computed: {
        liberatorsTeams() {
            return this.teams.slice(0,6); 
        }
    }
})

Vue.component('relegated-teams', {
    props:['teams'],
    template: `
        <div>
            <h3>Times Rebaixados</h3>
            <ul>
                <li v-for="team in relegatedTeams">
                    <dteam :team="team"></dteam>
                </li>
            </ul>
        </div>
    `,
    computed: {
        relegatedTeams() {
            return this.teams.slice(16,20);
        }
    }
})

Vue.component('new-play', {
    template: `
    <div>
        <button 
            class="btn btn-primary" 
            @click="createNewPlay">Novo Jogo</button>
        <score-modal :houseTeam="houseTeam" :outTeam="outTeam" ref="modal"></score-modal>
    </div>
    `,
    data() {
        return {
            teams: this.teamsCollection,
            houseTeam: null,
            outTeam: null
        }
    },
    // props: ['teams'],    
    inject: ['teamsCollection'],
    methods: {
        createNewPlay() {
            let indexHome = Math.floor(Math.random() * 20), 
                indexOut = Math.floor(Math.random() * 20)

            if(indexHome == indexOut) {
                indexHome = Math.floor(Math.random() * 20); 
                indexOut = Math.floor(Math.random() * 20); 
            }   

            this.houseTeam = this.teams[indexHome];
            this.outTeam = this.teams[indexOut]; 
            this.$refs.modal.showModal();
            // this.$emit('new-play', {houseTeam, outTeam});
        } 
    }
})

Vue.component('score-modal', {
    props: ['houseTeam', 'outTeam'],
    data() {
        return {
            goalsByHouse: 0,
            goalsByOut: 0
        }
    }, 
    template: `
        <modal ref="modal">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Play</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
             </div>
            <div class="modal-body">
                <form action="" class="form-inline">                    
                    <input type="text" class="form-control col-md-1" v-model="goalsByHouse">                
                    <dteam :team="houseTeam" inverse="true"></dteam>

                    <span><h2>X</h2></span>

                    <dteam :team="outTeam"></dteam>                
                    <input type="text" class="form-control col-md-1" v-model="goalsByOut">                
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="endPlay">Fim de Jogo</button>            
            </div>
        </modal>
    `,
    methods: {
        endPlay() {
            var gm = parseInt(this.goalsByHouse); 
            var gs = parseInt(this.goalsByOut);
            this.houseTeam.endPlay(this.outTeam, gm, gs);            
            this.closeModal();
            // this.$emit('end-play');
        },
        showModal() {            
            this.$refs.modal.show();
            
        },
        closeModal() {
            this.$refs.modal.close();
        }        
    }
})


Vue.component('modal', {        
    template: `
    <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
    `,   
    methods: {        
        show() {
            $(this.$el).modal('show');
        },
        close() {
            $(this.$el).modal('hide');
        }
    }
})

new Vue({
    el: "#app",
    template: '<my-app></my-app>',
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
    }
})