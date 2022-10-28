export const API_URL = {
  POST: {
    LOGIN: 'http://13.125.151.45:8080/login',
    KAKAO_LOGIN: 'http://13.125.151.45:8080/login/kakao',
    SIGNUP: 'http://13.125.151.45:8080/signup',
    MAIN: 'http://13.125.151.45:8080/api/main',
    MAIN_CURATION: 'http://13.125.151.45:8080/api/main/curation',
    ADMIN_REGISTER: 'http://13.125.151.45:8080/api/package/admin/register',
  },
  GET: {
    ALL_CATEGORY: 'http://13.125.151.45:8080/api/category', // 서브 카테고리 조회 방법api/category/{id}
    ADMIN_INDEX: 'http://13.125.151.45:8080/admin/index',
    INDEX: 'http://13.125.151.45:8080/index',
    USER_INDEX: 'http://13.125.151.45:8080/user/index',
    ADMIN_PACKAGE_LIST: 'http://13.125.151.45:8080/api/package/admin', // 특정 상품 조회 /admin/{id}
    ADMIN_PACKAGE_DELETE: 'http://13.125.151.45:8080/api/package/admin/delete', // delete/{id} 이용하여 삭제
    REVIEW_LIST: 'http://13.125.151.45:8080/api/review',
    SUB_CATEGORY: 'http://13.125.151.45:8080/api/group/sub?name=문화&sortFlg=',
    MAIN_CATEGORY: 'http://13.125.151.45:8080/api/main/category', // 메인 배너에 활용되는 카테고리
  },
};
