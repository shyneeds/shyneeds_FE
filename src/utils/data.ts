import instance from './instance';

export default {
  getProductData() {
    return instance({
      url: '/category',
      method: 'get',
    });
  },
  postMainData() {
    return instance({
      url: '/main',
      method: 'post',
    });
  },
};
