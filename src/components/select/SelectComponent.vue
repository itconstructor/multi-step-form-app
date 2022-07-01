<template>
  <div class="select-container">
    <div class="select-container__content content">
      <label for="" class="content__label">
        {{ label }}
      </label>
      <select 
        class="content__select" 
        v-model="modelValue" 
        @change="changeOption">
        <option class="content__option" 
          v-for="option in this.options" 
          :key="option.countryName" 
          :value="option">
          {{ option.countryName }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>

import { Country } from '@/models/country-model'

export default {
  name: 'SelectComponent',
  props: {
    label: String,
    modelValue: Country,
    options: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log('Options', this.options)
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', this.modelValue);
      this.$emit('countryChanged', this.modelValue);
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./select-component.scss"
</style>
