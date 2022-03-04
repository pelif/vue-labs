<template>
    <div>
        <button 
            class="btn btn-primary" 
            @click="createNewPlay">Novo Jogo</button>
        <score-modal :houseTeam="houseTeam" :outTeam="outTeam" ref="modal"></score-modal>
    </div>
</template>

<script>
    export default { 
        data() {
            return {
                teams: this.teamsCollection,
                houseTeam: null,
                outTeam: null
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