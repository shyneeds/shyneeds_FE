import axios from 'axios';

const URL = 'http://13.125.151.45:8080/api/package/admin';
export const getProductData = async () => {
  try {
    const response = await axios.get(URL).then((res) => res.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
