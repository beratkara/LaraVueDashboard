<template>
    <div>
        <div class="bg-soft-primary">
            <div class="row">
                <div class="col-7">
                    <div class="text-primary p-4">
                        <h5 class="text-primary">Free Register</h5>
                        <p>Get your free Skote account now.</p>
                    </div>
                </div>
                <div class="col-5 align-self-end">
                    <img src="/images/profile-img.png" alt class="img-fluid" />
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div>
                <a href="/">
                    <div class="avatar-md profile-user-wid mb-4">
                <span class="avatar-title rounded-circle bg-light">
                  <img src="/images/logo.svg" alt height="34" />
                </span>
                    </div>
                </a>
            </div>

            <b-form class="p-2" @submit.prevent="register">
                <b-form-group id="fullname-group" label="Email" label-for="email">
                    <b-form-input id="email" v-model="email" type="email" placeholder="Enter email"></b-form-input>
                </b-form-group>

                <b-form-group id="password-group" label="Password" label-for="password">
                    <b-form-input
                        id="password"
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <div class="mt-4">
                    <b-button type="submit" variant="primary" class="btn-block">Register</b-button>
                </div>
                <div class="mt-4 text-center">
                    <p class="mb-0">
                        By registering you agree to the Skote
                        <a
                            href="javascript: void(0);"
                            class="text-primary"
                        >Terms of Use</a>
                    </p>
                </div>
            </b-form>

        </div>

        <div class="mt-5 text-center">
            <p>
                Hesabın var mı ?
                <a
                    href="/login"
                    class="font-weight-medium text-primary"
                >Giriş Yap</a>
            </p>
            <guest-author></guest-author>
        </div>

    </div>

</template>

<script>
    import GuestAuthor from "./GuestAuthor";
    export default {
        name: "GuestLogin",
        components: {
            GuestAuthor
        },
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods: {
            register() {
                const credentials = {
                    email: this.email,
                    password: this.password
                };

                const data = {
                    credentials: credentials
                };

                this.$auth.register({
                    data,
                    success: function () {
                        console.log("test");
                    },
                    rememberMe: true,
                    fetchUser: true
                })


            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
