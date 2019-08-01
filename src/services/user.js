import BaseService from './base';

export default class UserService extends BaseService {
    constructor() {
        super();
        this.path = '/user';
    }
}
