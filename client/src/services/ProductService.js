import axios from 'axios';

export default {
    list() {
        return axios.get('/products')
    },
    get(id){
        return axios.get(`/product/${id}`)
    }
}