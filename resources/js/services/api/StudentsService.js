import axios from 'axios'
import Query from "../Query";

export default class extends Query {
    constructor() {
        super();
        this.resource = '/auth/students';
    }

    createCode({id}) {
        let resource = this.resource + '/createCode';
        return axios.get(`${resource}/${id}`);
    }

}
