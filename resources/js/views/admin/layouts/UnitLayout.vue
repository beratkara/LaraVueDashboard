<template>
    <div>
        <div id="layout-wrapper">
            <NavBar />
            <SideBar :is-condensed="isMenuCondensed" />

            <div class="main-content">
                <div class="page-content">
                    <!-- Start Content-->
                    <div class="container-fluid">
                        <slot />
                        <router-view></router-view>
                    </div>
                </div>
                <Footer />
            </div>
            <RightBar />
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/nav-bar";
    import SideBar from "../components/side-bar";
    import RightBar from "../components/right-bar";
    import Footer from "../components/footer";

    export default {
        name: "UnitLayout",
        components: { NavBar, SideBar, RightBar, Footer },
        data() {
            return {
                isMenuCondensed: false
            };
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
