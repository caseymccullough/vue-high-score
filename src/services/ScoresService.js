import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8080'
});

export default {

    list() {
        return http.get('/scores?limit=10');
    },
    get(id) {
        return http.get(`/scores/${id}`);
    },
    create(userScore){
        return http.post(`/scores`, userScore);
    }


}