import Vue from 'vue'
import store from './store'
import axios from 'axios'

import router from './routes.js'
Vue.router = router;

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api/`;

import VueAuth from "@websanova/vue-auth";
import auth from './auth'
Vue.use(VueAuth, auth);

import App from './layouts/App.vue'

Vue.config.productionTip = false;

// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development';

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;

export default app;
