import axios from 'axios';

const URL = 'http://localhost:4000';

const AXIOS = axios.create({
  baseURL: URL,
  timeout: 30000,
});

export default AXIOS;
