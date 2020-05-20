<template>
    <div>
        <div class="bg-soft-primary">
            <div class="row">
                <div class="col-7">
                    <div class="text-primary p-4">
                        <h5 class="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
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

            <b-form class="p-2" @submit.prevent="login">
                <slot />
                <b-form-group id="input-group-1" label="Email" label-for="input-1">
                    <b-form-input id="input-1" name="email" type="text" v-model="email" placeholder="Enter email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        name="password"
                        type="password"
                        v-model="password"
                        placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>
                <div class="custom-control custom-checkbox">
                    <input id="customControlInline" type="checkbox" class="custom-control-input" />
                    <label class="custom-control-label" for="customControlInline">Remember me</label>
                </div>
                <div class="mt-3">
                    <b-button type="submit" variant="primary" class="btn-block">Log In</b-button>
                </div>
                <div class="mt-4 text-center">
                    <a href="/reset/password" class="text-muted">
                        <i class="mdi mdi-lock mr-1"></i> Forgot your password?
                    </a>
                </div>
            </b-form>

        </div>

        <div class="mt-5 text-center">
            <p>
                Hesabım Yok ?
                <a
                    href="/register"
                    class="font-weight-medium text-primary"
                >Kayıt Ol</a>
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
            login() {
                const credentials = {
                    email: this.email,
                    password: this.password
                };

                const data = {
                    credentials: credentials
                };

                this.$auth.login({
                    data,
                    success: function () {

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
