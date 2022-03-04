<template>
    <div>        
        <input type="text" name="" v-model="search" class="form-control">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th v-for="(field, index) in order.fields" v-bind:key="field">
                        <a href="#" @click.prevent="ordering(index)">{{ field | ucwords }}</a>
                    </th>                                       
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(team,index) in teamOrder" 
                    v-bind:key="team" 
                    :class="{'table-success': index < 6}" 
                    :style="{'font-size': index<6 ? '17px' : '15px'}">

                    <td><data-team :team="team"></data-team></td>
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
</template>

<script>
    import _ from 'lodash'; 
    export default { 
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
    }
</script>