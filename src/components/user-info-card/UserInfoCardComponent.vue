<template>
    <div class="user-info-card-container">
        <div class="user-info-card-container__content content">
            <div class="user-info">
                <div class="user-info-property">
                    Name: {{ userModel.name}}
                </div>
                <div class="user-info-property">
                    Where do you live: {{ userModel.country.countryName}}
                </div>
                <div class="user-info-property">
                    Package: {{ userModel.userPackage.name}}
                </div>
                <div class="user-info-property">
                    Premium: {{ userModel.totalValue}}{{ userModel.country.currency}}
                </div>
            </div>            

        </div>

    </div>
</template>

<script>
import { User } from '@/models/user-model';

export default {
    name: 'UserInfoCardComponent',
    props: {
        userModel: User
    },
    methods: {
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./user-info-card-component.scss"
</style>
