import axios from 'axios';
export let url = 'http://localhost:8080/';
const instance = axios.create({
  baseURL: url,
});

export default instance;