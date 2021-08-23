import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors.bridged.cc/https://api.deezer.com/'
});

export default api;