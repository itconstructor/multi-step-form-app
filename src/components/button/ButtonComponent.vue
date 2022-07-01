<template>
  <button 
  :class="classBtn" 
  @click.prevent="btnClickHandler">
    <slot></slot>
  </button>
</template>


<script>
export default {
  name: 'ButtonComponent',
  props: {
    classBtn: String
  },
  methods: {
    btnClickHandler(event) {
      this.$emit('onBtnClick')
    }
  }
}
</script>

<style scoped lang="scss">
@import './button-component.scss';

</style>

