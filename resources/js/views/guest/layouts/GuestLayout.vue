<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card overflow-hidden">
                <router-view></router-view>
                <div class="mt-5 text-center">
                    <p>
                        Don't have an account ?
                        <a
                            href="/register"
                            class="font-weight-medium text-primary"
                        >Kayıt Ol</a>
                    </p>
                    <p>
                        © {{new Date().getFullYear()}} KPanel. Yapımcı
                        <i class="mdi mdi-heart text-danger"></i> Berat Kara
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuestLayout",
        mounted() {

        }
    }
</script>

<style scoped>

</style>
