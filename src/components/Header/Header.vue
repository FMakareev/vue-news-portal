<template>
    <header>
        <!-- Header desktop -->
        <div class="container-menu-desktop">
            <HeaderTopbar/>

            <!-- Header Mobile -->
            <HeaderMobile/>

            <!-- Menu Mobile -->
            <HeaderMenuMobile/>

            <!--  -->
            <div class="wrap-logo container">
                <!-- Logo desktop -->
                <div class="logo">
                    <a href="index.html"><img src="../../assets/images/icons/logo-01.png" alt="LOGO"></a>
                </div>

                <!-- Banner -->
                <div class="banner-header">
                    <a href="#"><img src="../../assets/images/banner-01.jpg" alt="IMG"></a>
                </div>
            </div>

            <!--  -->
            <HeaderMenuDesktop/>
        </div>
    </header>
</template>

<script>

    import HeaderTopbar from './HeaderTopbar.vue';
    import HeaderMobile from './HeaderMobile.vue';
    import HeaderMenuMobile from './HeaderMenuMobile.vue';
    import HeaderMenuDesktop from './HeaderMenuDesktop.vue';

    export default {
        name: "Header",
        components:{
            HeaderTopbar,
            HeaderMobile,
            HeaderMenuMobile,
            HeaderMenuDesktop,
        }
    }
</script>

<style scoped>

</style>
