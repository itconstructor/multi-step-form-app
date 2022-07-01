<template>
    <div class="third-page-container">
        <div class="third-page-container__content">
            <div class="content__title">Summary</div>
            <div class="content__name">{{$store.state.user.name}},</div>
            <div class="content__third-page">
                <UserInfoCardComponent :userModel="$store.state.user" />
            </div>
            <div class="third-page__buttons-container">
                <div class="third-page-buttons-container__content">
                    <ButtonComponent classBtn="btn-back" @onBtnClick="back">
                        Back
                    </ButtonComponent>
                    <ButtonComponent classBtn="btn-next" @onBtnClick="buy">
                        Buy
                    </ButtonComponent>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./third-page.scss"
</style>

<script>


export default {
    name: 'ThirdPage',
    methods: {
        back() {
            this.$router.push({ path: '/second-page' });
        },
        buy() {
            this.$router.push({ path: '/' });
        }
    }
}
</script>
