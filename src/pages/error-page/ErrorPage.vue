<template>
    <div class="error-page-container">
        <div class="error-page-container__content">
            <div class="content__title">Ooops</div>
            <div class="content__subtitle">Your age ss over our accepted limit.</div>
            <div class="content__subtitle">We are sorry but we cannot insure you now</div>
            <div class="content__button">
                <ButtonComponent classBtn="content-btn__ok" @onBtnClick="returnToFirstPage">
                    Ok :(
                </ButtonComponent>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./error-page.scss"
</style>

<script>


export default {
    name: 'ErrorPage',
    methods: {
        returnToFirstPage() {
            this.$router.push({ path: '/' });
        }
    }
}
</script>
