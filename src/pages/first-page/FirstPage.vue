<template>
  <div class="page-container">
    <StartComponent 
      title="Hello There!"
      subtitle="Let's by some insurance. It is going to take only a few steps"
    />
  </div>
</template>

<style scoped lang="scss">
@import "./first-page.scss"

</style>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'FirstPage',
  created() { 
    this.clearUser();
  },
  methods: {
    ...mapMutations({
      clearUser: 'clearUser'
    }),
  }

}
</script>
