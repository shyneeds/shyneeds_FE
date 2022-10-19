import axios from 'axios';
import { API_URL } from '../constants/API_URL';
import { CurationResponse } from './ResponseType';

export const getCurationData = async () => {
  try {
    const response = await axios.post<CurationResponse>(
      API_URL.POST.MAIN_CURATION,
      {
        age: '2030',
        accompany: null,
        country: null,
        religion: null,
        tendency: null,
        theme: null,
      }
    );

    const curationData = response.data.data;
    console.log(curationData);
    return curationData;
  } catch (error) {
    console.log('error');
  }
};
