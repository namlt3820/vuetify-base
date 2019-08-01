import Vue from 'vue';
import './plugins/axios';
import store from './store';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import './assets/css/general.css';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
