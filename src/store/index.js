import { User } from '@/models/user-model'
import { createStore } from 'vuex'
import { Country } from '@/models/country-model';
import { UserPackage } from '@/models/user-package-model';

export default createStore({
  state: {
    user: new User()    
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      let country = new Country(user.country.countryName, user.country.currency)
      let userPackage = new UserPackage(user.userPackage.name, user.userPackage.additionalPrice)
          
      state.user = new User(
          user.name,
          user.age,
          country,
          userPackage
        );
    },
    clearUser(state) {
      state.user = new User();
    },
    setUserTotalValue(state, totalValue) {
      state.user.totalValue = totalValue;
    },
    setUserTotalValueWithoutPackagePrice(state, totalValueWithoutPackagePrice) {
      state.user.totalValueWithoutPackagePrice = totalValueWithoutPackagePrice;
    },
    setUserCountry(state, country) {
      state.user.country = new Country(country.countryName, country.currency);
    },
    setUserPackage(state, userPackage) {
      state.user.userPackage = new UserPackage(userPackage.name, userPackage.additionalPricePercent);
    },
    setUserName(state, name) {
      state.user.name = name;
    },
    setUserAge(state, age) {
      state.user.age = age;
    }
  },
  actions: {
  },
  modules: {
  }
})
