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