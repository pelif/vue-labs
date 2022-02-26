Vue.component('title-app', {
    template: `
    <div class="row">
        <h3>The Best Of Arcade</h3>
    </div>
    `
})

Vue.component('data-player', {
    props: ['player', 'inverse'],
    template: `
    <div style="display:flex; flex-direction:row">
        <img class="avatar" :src="player.avatar" :style="{order: inverse == 'false'}">
        <span :style="{order: inverse == 'false' ? 2 : 1}">{{ player.name }}</span>
    </div>
    `
})

Vue.component('new-game', {
    props: ['p1', 'p2'],
    data() {
        return {
            victoriesByOne: 0,
            victoriesByTwo: 0
        }
    }, 
    template: `
    <div>
        <form action="" class="form-inline">

        <input type="text" class="form-control col-md-1" v-model="victoriesByOne">                
        <data-player :player="p1" inverse="true"></data-player>

        <span><h2>X</h2></span>

        <data-player :player="p2"></data-player>                
        <input type="text" class="form-control col-md-1" v-model="victoriesByTwo">

        <button type="button" class="btn btn-default" @click="endGame">Fim de Jogo</button>            
        </form>

    </div>
    `,
    methods: {
        endGame() {
            var fightsWon = parseInt(this.victoriesByOne);
            var lostFights = parseInt(this.victoriesByTwo); 
            this.p1.endGame(this.p2, fightsWon, lostFights); 
            this.$emit('end-game');

            console.log(this.p1)
            console.log(this.p2)
        }
    }
})

Vue.component('table-players', {
    props:['players'],
    data() {
        return {
            search: '',
            order: {
                fields: ['Vitórias','Derrotas','Lutas Vencidas','Lutas Perdidas'],
                sort: ['desc', 'desc', 'desc', 'desc']
            }
        }
    },
    template: `
        <div>
        <div class="form-group" style="margin-top:22px;">
            <input 
                type="text" 
                name="" 
                v-model="search" 
                class="form-control col-md-4" 
                placeholder="Digite o nome do player">
        </div>
        <table class="table table-stripedd">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th v-for="(field,index) in order.fields">
                    <a href="#" @click.prevent="ordering(index)">{{ field }}</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(player,index) in playerOrder"
                    :class="{'table-danger': player.defeats >= 3 ? 'alert alert-danger' : ''}">
                    <td><data-player :player="player"></data-player></td>
                    <td>{{ player.victories }}</td>
                    <td>{{ player.defeats }}</td>
                    <td>{{ player.fightsWon }}</td>
                    <td>{{ player.lostFights }}</td>
                </tr>
            </tbody>
        </table>
        </div>
    `,
    computed: {
        playerOrder() {
            let players = _.orderBy(this.orderedPlayers, this.order.fields, this.order.sort);
            let self = this;
            return _.filter(players, function(player) {
                let search = self.search.toLowerCase();
                return player.name.toLowerCase().indexOf(search) >= 0;
            })
        },
        orderedPlayers() {
            return _.orderBy(this.players, this.order.fields, this.order.ordering)
        }
    },
    methods: {
        ordering(index) {
            console.log(this.order.sort[index])
            this.$set(this.order.sort, index, this.order.sort[index] == 'desc' ? 'asc' : 'desc');            
        }
    }
})


new Vue({
    el: "#app",
    data: {
        players: [
            new Player('Flavio Ryu', 'https://cdn.wikimg.net/en/strategywiki/images/9/9c/Portrait_SF2CE_Ryu.png'),
            new Player('Klebim Balrog', 'https://cdn.wikimg.net/en/strategywiki/images/c/cf/Portrait_SF2CE_Balrog.png'),
            new Player('Fernando Gyn', 'https://cdn.wikimg.net/en/strategywiki/images/d/db/Portrait_SF2CE_Guile.png'),
            new Player('Red Kim', 'https://cdn.wikimg.net/en/strategywiki/images/9/9c/Portrait_SF2CE_Ryu.png'),
            new Player('Best Fighter', 'https://cdn.wikimg.net/en/strategywiki/images/d/dd/Portrait_SF2CE_MBison.png')
        ],
        p1: '',
        p2: '',
        view: 'off'
    },
    methods: {
        createNewGame() {
            let indexOne = Math.floor(Math.random() * 5),
                indexTwo = Math.floor(Math.random() * 5)
    
            if(indexOne == indexTwo) {
                indexOne = Math.floor(Math.random() * 5);            
                indexTwo = Math.floor(Math.random() * 5);
            }   

            console.log(this.players[indexOne])
    
            this.p1 = this.players[indexOne];
            this.p2 = this.players[indexTwo];
                        
            this.view = 'on';
        },
        endingGame() {

        }      
    }
    
})