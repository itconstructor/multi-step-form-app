<template>
  <div class="start-container">
    <div class="start-container__content content">
      <h1 class="content__title">{{ title }}</h1>
      <h2 class="content__subtitle">{{ subtitle }}</h2>
      <div class="content__btn">
        <!--<button class="content-btn__item" @click.prevent="start">Start</button>-->
        <ButtonComponent 
          classBtn="content-btn__item"
          @onBtnClick="start">
          Start
        </ButtonComponent>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'StartComponent',
  props: {
    title: String,
    subtitle: String
  },
  methods: {
    start() {     
      this.$router.push({ path: '/second-page' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./start-component.scss"
</style>
