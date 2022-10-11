import axios from 'axios';
import { API_URL } from '../../../constants/API_URL';

const URL = API_URL.GET.ALL_CATEGORY;
export const getProductData = async () => {
  try {
    const response = await axios.get(URL).then((res) => res.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
