<template>
    <div class="radio-button-panel-container content">
        <div class="content__radio-btns">
            <div class="radio-btns__item">
                <labe class="radio-btns-item__label">
                    <input 
                        class="radio-btns-item__input" 
                        type="radio" 
                        v-model="selectedPackage" 
                        :value="packages[0]"
                        :checked="isChecked(packages[0])" 
                        @change="changedHandler"/>
                    {{getPackageMessage('Standart')}}
                </labe>
            </div>
            <div class="radio-btns__item">
                <label class="radio-btns-item__label">
                    <input 
                        class="radio-btns-item__input" 
                        type="radio" 
                        v-model="selectedPackage" 
                        :value="packages[1]" 
                        @change="changedHandler"
                        :checked="isChecked(packages[1])"/>
                    {{getPackageMessage('Safe')}}
                </label>

            </div>
            <div class="radio-btns__item">
                <label class="radio-btns-item__label">
                    <input 
                        class="radio-btns-item__input" 
                        type="radio" 
                        v-model="selectedPackage" 
                        :value="packages[2]" 
                        @change="changedHandler"
                        :checked="isChecked(packages[2])"/>
                    {{getPackageMessage('SuperSafe')}}
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
 @import "./radio-button-panel.scss"
</style>

<script>
import { Country } from '@/models/country-model'
import { UserPackage } from '@/models/user-package-model'



export default {
    name: 'RadioButtonPanel',
    props: {
        totalValue: Number,
        currency: String,

    },
    data() {
        return {
            selectedPackage: UserPackage,
            packages: Array
        }
    },
    created() { 
        this.packages = Array.of(
            new UserPackage(
                'Standart',
                0
            ),
            new UserPackage(
                'Safe',
                0.5
            ),
            new UserPackage(
                'SuperSafe',
                0.75
            ),
        );
        this.initUserPackage();

    },
    methods: {
        initUserPackage() {
            if (this.$store.state.user.userPackage && this.$store.state.user.userPackage.name) {
                this.selectedPackage = this.$store.state.user.userPackage                
            } else {
                this.selectedPackage = this.packages[0];
            }            
        },
        isChecked(userPackage) {            
            return this.selectedPackage.name == userPackage.name
        },
        packagePrice(additionalPricePercent) {
            return this.totalValue ? (this.totalValue * additionalPricePercent) : '';        
        },
        getPackageMessage(packageName) {
            switch (packageName) {
                case 'Safe':
                    return this.getPackageMessageWithAdditionalPrice('Safe')
                    break;
                case 'SuperSafe':
                    return this.getPackageMessageWithAdditionalPrice('SuperSafe')
                    break;
                default:
                    return 'Standart'

            }
        },
        getPackageMessageWithAdditionalPrice(packageName) {
            let userPackage = this.packages.find(
                userPackage => userPackage.name == packageName
                
            )
            if (userPackage) {
                if (this.totalValue && this.currency) {
                    let price = this.packagePrice(userPackage.additionalPricePercent)
                    let addPrice = userPackage.additionalPricePercent * 100
                    return `${userPackage.name} (+${price} ${this.currency}, ${addPrice}%)`

                } else return userPackage.name
            }

        },
        changedHandler() {
            this.$emit('radioValueChanged', this.selectedPackage)
        }
    },
    computed: {
        
    }
}
</script>
