<template>
  <div class="container">       
        <page-title></page-title>
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
</template>

<script>
export default {
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
}
</script>
