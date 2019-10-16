import axios from 'axios';

const api = axios.create({
  baseURL: 'http://q3-5sz.anonymous.mobile.exp.direct:3333',
});

export default api;