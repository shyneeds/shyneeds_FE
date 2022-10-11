import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.125.151.45:8080/api',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
