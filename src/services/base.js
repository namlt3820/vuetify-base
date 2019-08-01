import Vue from 'vue';

export default class BaseService {
    constructor(p) {
        this.path = p;
    }

    get(param) {
        return Vue.axios.get(this.path, { param });
    }

    post(param) {
        return Vue.axios.post(this.path, param);
    }

    put(param) {
        return Vue.axios.put(this.path, param);
    }

    delete(param) {
        return Vue.axios.delete(this.path, param);
    }
}
