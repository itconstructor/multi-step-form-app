<template>
  <div class="input-container">
    <div class="input-container__content content">
      <label for="" class="content-label">
        {{ label }}
      </label>
      <input class="content__input" 
      :type="type" 
      :placeholder="placeholder" 
      :value="modelValue"      
      @input="updateInput">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    label: String,
    type: String,
    placeholder: String,
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
      this.$emit('inputChanged', event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./input-component.scss"
</style>
