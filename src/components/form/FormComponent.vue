<template>
  <div class="form-container">
    <form class="form-container__content content" @submit.prevent>
      <InputComponent
        class="content__item" 
        label="Name"
        type="text"
        placeholder="Add name"
        v-model="modelValue.name"
        @inputChanged="setName"
      />
      <InputComponent
        class="content__item" 
        label="Age"
        type="number"
        placeholder="Add age"
        v-model="modelValue.age"
        @inputChanged="setAge"
      />
      <SelectComponent
        label="Where do you live"
        v-model="modelValue.country"
        :options="countries"
        @countryChanged="setCountry"
      />
      <RadioButtonPanel 
        class="form__radio-buttons"
        :currency="currency"
        :totalValue="$store.state.user.totalValueWithoutPackagePrice" 
        @radioValueChanged="setPackage"                     
        />
    </form>
  </div>
</template>

<script>
import { User } from '@/models/user-model';
import { Rate } from '@/models/rate-model';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      currency: String,
      age: Number,
      totalValue: Number,
      //totalValueWithoutPackagePrice: Number,
      countries: [
        {
          countryName: 'Hong Kong', currency: 'HKD'
        },
        {
          countryName: 'USA', currency: 'USD'
        },
        {
          countryName: 'Australia', currency: 'AUD'
        }
      ],
      packages: [
        {
          name: 'Standard ',
          additionalPrice: 0
        },
        {
          name: 'Safe',
          additionalPrice: 0.5
        },
        {
          name: 'Super Safe',
          additionalPrice: 0.75
        }
      ],
      rates: Array  
    }
  },
  name: 'FormComponent',
  props: {
    label: String,
    type: String,
    placeholder: String,
    modelValue: User
  },
  created() {
    this.rates = Array.of(
      new Rate('HKD', 1),
      new Rate('USD', 2),
      new Rate('AUD', 3),
    )
    this.totalValue = this.modelValue.totalValue;
    this.currency = this.modelValue.country.currency;
    this.age = this.modelValue.age;
  },
  methods: {
    ...mapMutations({
      setUserTotalValue: 'setUserTotalValue',
      setUserTotalValueWithoutPackagePrice: 'setUserTotalValueWithoutPackagePrice',
      setUserCountry: 'setUserCountry',
      setUserPackage: 'setUserPackage',
      setUserName: 'setUserName',
      setUserAge: 'setUserAge',
    }),
    start() {     
      this.$router.push({ path: '/second-page' });
    },
    packagePrice(totalValueWithoutPackagePrice, additionalPricePercent) {
      
      if (totalValueWithoutPackagePrice && additionalPricePercent) {
        return totalValueWithoutPackagePrice * additionalPricePercent;
      } else return 0;      
    },
    setTotalValue() {
      if (this.age && this.currency) {
        let totalValue = this.calculateTotalValue()        
        this.setUserTotalValue(totalValue)
      } else {
        this.totalValue = 0;
        this.setUserTotalValueWithoutPackagePrice(0);
        this.setUserTotalValue(0);        
      }
    },
    setName(name) {      
      this.setUserName(this.modelValue.name)
    },    
    setAge(age) {
      this.age = Number(age);
      this.setUserAge(this.age)
      this.setTotalValue()
    },
    setCountry(currency) {
      this.currency = this.modelValue.country.currency      
      this.setTotalValue();
      this.setUserCountry(this.modelValue.country)
    },
    setPackage(userPackage) {
      this.setUserPackage(userPackage);
      this.setTotalValue();
    },
    calculateTotalValue() {
      if (this.age && this.currency) {
        let rate = this.rates.find(
          rate => rate.currency == this.currency
        )
        if (rate) {
          let totalValueWithoutPackagePrice = 10 * this.age * rate.rateValue

          this.setUserTotalValueWithoutPackagePrice(totalValueWithoutPackagePrice)
          
          let additionalPackagePrice = this.packagePrice(
            totalValueWithoutPackagePrice,
            this.$store.state.user.userPackage.additionalPricePercent)
          

          this.totalValue = totalValueWithoutPackagePrice + Number(additionalPackagePrice);
          
          return this.totalValue
        }

      } else {
        this.setUserTotalValueWithoutPackagePrice(0)
        this.totalValue = 0;
      }

    }
                 

  },
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./form-component.scss"
</style>
