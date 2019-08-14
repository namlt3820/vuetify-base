import Vue from 'vue';
import './plugins/axios';
import VeeValidate from 'vee-validate';
import CKEditor from '@ckeditor/ckeditor5-vue';
import store from './store';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';

Vue.use(VeeValidate);
Vue.use(CKEditor);
Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
