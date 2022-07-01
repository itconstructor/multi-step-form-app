<template>
  <div class="page-container content">
    <div class="content__form">
      <div class="form__title">
        Tell us about yourself
      </div>
      <FormComponent v-model="user" />
      <div class="form__total">
        <span class="total__message">
          Your Premium is: 
          {{$store.state.user.totalValue ? $store.state.user.totalValue : ''}}
          {{$store.state.user.country.currency}}
        </span>
      </div>
      <div class="form__buttons-container">
        <div class="form-buttons-container__content">
          <ButtonComponent classBtn="btn-back" @onBtnClick="back">
            Back
          </ButtonComponent>
          <ButtonComponent classBtn="btn-next" @onBtnClick="next">
            Next
          </ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"> 
@import "./second-page.scss"

</style>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import {User}  from "@/models/user-model"
import { Country } from '@/models/country-model';
import { UserPackage } from '@/models/user-package-model';


export default {
  name: 'SecondPage',
  methods: {
    ...mapMutations({
      setUser: 'setUser',
      
    }),
    isAgeValid(age) {
      return age <= 100
    },
   
    back() {
      this.$router.push({ path: '/' });
    },
    next() {
      if (this.isAgeValid(this.$store.state.user.age)) {
        this.$router.push({ path: '/third-page' });
      } else {        
        this.$router.push({ path: '/error-page' });
      }
      
      
    }
  },
  computed: {
    ...mapState({
      user: state => {
        let country = new Country(state.user.country.countryName, state.user.country.currency)
        let userPackage = new UserPackage(state.user.userPackage.name, state.user.userPackage.additionalPrice)
        return new User(
          state.user.name,
          state.user.age,
          country,
          userPackage
        );
    }
    })
  } 
}
</script>
