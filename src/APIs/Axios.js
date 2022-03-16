import axios from 'axios';
export let url = 'https://cms-ahmad.herokuapp.com/';
const instance = axios.create({
  baseURL: url,
});

export default instance;
