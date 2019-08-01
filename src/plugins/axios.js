import Vue from 'vue';
import axios from 'axios';
import httpStatus from '../config/httpStatus.js';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = "http://45.77.170.201:7999/api";
// axios.defaults.headers.common["Authorization"] = window.localStorage.getItem("jwt");
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
const { CancelToken } = axios;
const source = CancelToken.source();
const config = {
    baseURL: process.env.VUE_APP_API_URL,
    validateStatus(status) {
        return (
            (status >= httpStatus.StatusOK && status < httpStatus.StatusMultipleChoices) ||
            status === httpStatus.StatusBadRequest
        );
    },
    cancelToken: source.token
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true // Check cross-site Access-Control
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        if (window.localStorage.getItem('jwt'))
            config.headers.Authorization = window.localStorage.getItem('jwt');
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue) {
    Vue.axios = _axios;
    Vue.CancelToken = source;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
