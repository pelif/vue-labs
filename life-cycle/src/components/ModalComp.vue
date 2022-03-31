<template>
    <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
    beforeCreate() {
      console.log('beforeCreate'); 
    }, 
    created() {
      console.log('created'); 
    }, 
    beforeMount() {
      console.log('beforeMount'); 
    }, 
    mounted() {
      console.log('mounted'); 
    }, 
    beforeUpdate() {
      console.log('beforeUpdate'); 
    },
    updated() {
      console.log('updated'); 
    }, 
    beforeDestroy() {
      console.log('beforeDestroy'); 
    }, 
    destroyed() {
      console.log('destroyed'); 
    },
    name: 'modal-comp',
    methods: {        
        show() {
            window.$(this.$el).modal('show');
        },
        close() {
            window.$(this.$el).modal('hide');
        }
    }
}    
</script>