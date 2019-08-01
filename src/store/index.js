import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        auth
    },
    state: {}, // = data
    getters: {}, // = computed
    mutations: {}, // change state here
    actions: {} // = method active mutations
});
