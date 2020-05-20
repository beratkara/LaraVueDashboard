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

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

let loadLocaleFiles = function(req) {
    const lang = {};
    req.keys().forEach(filename => {
        let split = filename.split('.')[1].split('/');
        let name = split[1];
        let page = split[2];
        if(!lang.hasOwnProperty(name))
            lang[name] = {};
        lang[name][page] = req(filename).default;
    });
    return lang;
};

let language = loadLocaleFiles(require.context('./locales/', true, /\.js$/));

export const messages = {
    en: language.en,
    tr: language.tr,
};

export const i18n = new VueI18n({
    locale: 'tr',
    fallbackLocale: 'tr',
    messages
});

import App from './layouts/App.vue'

Vue.config.productionTip = false;

// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development';

const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;

export default app;
