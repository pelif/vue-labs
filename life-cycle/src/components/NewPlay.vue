<template>
    <div>
        <button 
            class="btn btn-primary" 
            @click="createNewPlay"
            :disabled="loading">
            {{ loading == true ? 'Carregando ... ' : 'Novo Jogo' }}
        </button>
        <score-modal-mat :houseTeam="houseTeam" :outTeam="outTeam" ref="modal"></score-modal-mat>
    </div>
</template>

<script>
    import getTeams from '../get-teams'; 
    export default {         
        created() {
            getTeams
                .then(teams => { 
                    this.teams = teams
                })            
                .finally(() => this.loading = false); 
        },
        data() {
            return {
                // teams: this.teamsCollection,
                loading: true,
                houseTeam: null,
                outTeam: null,
                teams: []
            }
        },    
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
           } 
        }
    }
</script>