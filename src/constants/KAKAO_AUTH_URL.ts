export const REDIRECT_URL = 'http://localhost:3000/LoginResult'

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;