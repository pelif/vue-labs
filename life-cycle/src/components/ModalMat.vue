<template>
    <div class="modal">    
      <div class="modal-content">
        <slot></slot>
      </div>    
  </div>
</template>

<script>
export default {    
    mounted() {
        window.$(this.$el).modal();
    },     
    name: 'modal-mat',
    methods: {        
        show() {
            // this.getModal.open();
            window.M.Modal.getInstance(this.$el).open();
        },
        close() {
            // this.getModal.close();
            window.M.Modal.getInstance(this.$el).close();
        }, 
        getModal() {
            return window.M.Modal.getInstance(this.$el); 
        }
    }
}    
</script>