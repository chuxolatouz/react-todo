import AXIOS from './config';

const BASE_URI = '/api';

const ToDo = {
  get: () => AXIOS.get(`${BASE_URI}/all`),
  set: value => AXIOS.post(`${BASE_URI}/add`, { name: value }),
};

export default ToDo;
