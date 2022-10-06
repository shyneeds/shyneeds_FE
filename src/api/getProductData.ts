import axios from 'axios';

// 테스트용 Open API
const API_KEY = '89a6e62d73d087cc73d52caed22e9e6c';
const BASE_URL = 'http://openapi.11st.co.kr/openapi/OpenApiService.tmall';
const URL = () =>
  `${BASE_URL}?key=[${API_KEY}]&apiCode=ProductSearch&keyword=[여행]&pageNum=[1]&productCode=[1000]&option=PostScripts`;

export const getProductData = async () => {
  try {
    const response = await axios
      .get(URL())
      .then((res) => res.data.response.docs);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
