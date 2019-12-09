import axios from 'axios';
export default class MovieService {
    constructor() {
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        axios.defaults.baseURL = 'http://localhost:8000/api'
        axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            return Promise.reject(error);
          });
    }

    getAll() {
        return axios.get('/movies');
    }
    add(movie) {
        return axios.post('/movies', movie);
    }
    getId(id) {
        return axios.get('/movies/' + id);
    }
    delete(id) {
        return axios.delete('/movies/' + id);
    }
    edit(id, movie) {
        return axios.put('/movies/' + id, movie);
    }
    login(credentials) {
        return axios.post('/login', credentials);
    }
}

export const movieService = new MovieService(); 