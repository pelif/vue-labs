<template>
    <modal-mat ref="modalscoremat">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Play</h5>                         
        </div>
        <div class="modal-body">
            <form action="" class="form-inline">                    
                <input type="text" class="col-md-1" v-model="goalsByHouse">                
                <data-team :team="houseTeam" inverse="true"></data-team>
                <span><h2>X</h2></span>
                <data-team :team="outTeam"></data-team>                
                <input type="text" class="col-md-1" v-model="goalsByOut">                
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="modal-close waves-effect waves-red btn-flat" data-dismiss="modalscore">Close</button>
            <button type="button" class="modal-close waves-effect waves-green btn-flat" @click="endPlay">Fim de Jogo</button>            
        </div>
    </modal-mat>
</template>

<script>
export default { 
    props: ['houseTeam', 'outTeam'],
    data() {
        return {
            goalsByHouse: 0,
            goalsByOut: 0
        }
    }, 
    methods: {
        endPlay() {
            var gm = parseInt(this.goalsByHouse); 
            var gs = parseInt(this.goalsByOut);
            this.houseTeam.endPlay(this.outTeam, gm, gs);            
            this.closeModal();
            // this.$emit('end-play');
        },
        showModal() {            
            this.$refs.modalscoremat.show();
        },
        closeModal() {
            this.$refs.modalscoremat.close();
        }        
    }
}    
</script>