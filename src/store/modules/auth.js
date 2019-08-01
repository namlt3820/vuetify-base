import router from '../../router';
// import Vue from "vue";
export default {
    namespaced: true,
    state: {
        isLoggedIn: !!window.localStorage.getItem('jwt'),
        currentUser: null
        // typeLogin: window.localStorage.getItem("typeLogin") ? parseInt(window.localStorage.getItem("typeLogin")) : null
    },
    getters: {
        currentUser(state) {
            return state.currentUser;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        typeLogin(state) {
            return state.typeLogin;
        }
    },
    mutations: {
        setCurrentUser(state, currentUser) {
            window.localStorage.setItem('jwt', currentUser.webToken);
            window.localStorage.setItem('typeLogin', currentUser.typeLogin);
            state.currentUser = currentUser;
            state.isLoggedIn = true;
            state.typeLogin = currentUser.typeLogin;
        },
        login(state, datas) {
            window.localStorage.setItem('jwt', datas.username);
            state.isLoggedIn = true;
            state.currentUser = datas;
        },
        logout(state) {
            window.localStorage.removeItem('jwt');
            // window.localStorage.removeItem("typeLogin");
            state.currentUser = null;
            state.isLoggedIn = false;
            // console.log(window.localStorage.getItem("jwt"));
            // state.typeLogin = null;
            router.replace('/sign-in');
        }
    },
    actions: {
        logout({ commit }) {
            commit('logout');
        },
        login({ commit }, datas) {
            commit('login', datas);
        }
    }
};
