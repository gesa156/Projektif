import axios from 'axios';
const BASE_URL = 'http://localhost:3004';


export default axios.create({
    baseURL: BASE_URL
});

