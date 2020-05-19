import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../auth.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.devtools = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
    modules: {
        auth
    },

    strict: debug
});
