import axios, { AxiosInstance } from 'axios';

const getCookie = function(name: string){
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}

export const customAxios: AxiosInstance = axios.create({
  baseURL: `http://13.125.151.45:8080/api`, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});
export const customAxiosFormData: AxiosInstance = axios.create({
  baseURL: `http://13.125.151.45:8080/api`, // 기본 서버 주소 입력
  headers: {
    'Content-Type' : 'multipart/form-data',
    Authorization: `Bearer ${getCookie('token')}`,
  },
});