import axios, { AxiosInstance } from 'axios';
import session from 'redux-persist/lib/storage/session';

const getCookie = function(name: string){
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}

export const customAxios: AxiosInstance = axios.create({
  baseURL: `http://13.125.151.45:8080/api`, // 기본 서버 주소 입력
  headers: {
    Authorization: '',
  },
});
export const customLoginAxios: AxiosInstance = axios.create({
  baseURL: `http://13.125.151.45:8080`, // 기본 서버 주소 입력
  headers: {
    Authorization: '',
  },
});


customAxios.interceptors.request.use(
  function(config:any){
    const refreshToken = sessionStorage.getItem('refreshToken')
    if(!refreshToken){
      config.headers['refresh_token'] = null;
      config.headers['accessToken'] = null;
      return config
    }
    config.headers['Authorization']="Bearer "+getCookie('token');
    config.headers['refresh_token']="Bearer "+refreshToken;
    return config
  }
)
// customLoginAxios.interceptors.request.use(
//   function(config:any){
//     const refreshToken = sessionStorage.getItem('refreshToken')
//     if(!refreshToken){
//       config.headers['refresh_token'] = null;
//       config.headers['accessToken'] = null;
//       return config
//     }
//     config.headers['Authorization']="Bearer "+getCookie('token');
//     config.headers['refresh_token']="Bearer "+refreshToken;
//     return config
//   }
// )
customAxios.interceptors.response.use(
  function(response){
    return response
  },
  async function (error){
    const userId = sessionStorage.getItem('userId')
    if(error.response && error.response.status === 403){
      try{
        const originalRequest = error.config;
        const data = await customAxios.post(`/refresh/${userId}`,sessionStorage.getItem('refreshToken') , { headers : { 'REFRESH_TOKEN' : `${sessionStorage.getItem('refreshToken')}`}})
        if(data){
          console.log(data)
        }
      }catch(error){
        console.log(error)
      }
    }
  }
)