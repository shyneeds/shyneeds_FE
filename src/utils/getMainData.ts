import axios from 'axios';
import { API_URL } from '../constants/API_URL';
import { ResponseType } from './ResponseType';

export const getMainData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: [
        '지역별상품',
        '그룹별상품',
        '테마별상품',
        '종교별상품',
        '성향별상품',
        '연령별상품',
      ],
    });

    const mainData = response.data;
    console.log(mainData);
    return mainData;
  } catch (error) {
    console.log('error');
  }
};

export const getBannerData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: [],
    });

    const bannerData = response.data.data.mainBannerList;
    console.log(bannerData);
    return bannerData;
  } catch (error) {
    console.log('error');
  }
};

export const getCategoryData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: [
        '지역별상품',
        '그룹별상품',
        '테마별상품',
        '종교별상품',
        '성향별상품',
        '연령별상품',
      ],
    });

    const mainData = response.data.data;
    const categoryData = mainData.mainCategoryPackageList;
    console.log(categoryData);
    return categoryData;
  } catch (error) {
    console.log('error');
  }
};

export const getRegionData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: ['지역별상품'],
    });

    const mainData = response.data.data;
    const regionData = mainData.mainCategoryPackageList.지역별상품;
    console.log(regionData);
    return regionData;
  } catch (error) {
    console.log('error');
  }
};

export const getThemeData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: ['테마별상품'],
    });

    const mainData = response.data.data;
    const categoryData = mainData.mainCategoryPackageList;
    const themeData = categoryData.테마별상품;
    console.log(themeData);
    return themeData;
  } catch (error) {
    console.log('error');
  }
};

export const getGroupData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: ['그룹별상품'],
    });

    const mainData = response.data.data;
    const categoryData = mainData.mainCategoryPackageList;
    const groupData = categoryData.그룹별상품;
    console.log(groupData);
    return groupData;
  } catch (error) {
    console.log('error');
  }
};

export const getTendencyData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: ['성향별상품'],
    });

    const mainData = response.data.data;
    const categoryData = mainData.mainCategoryPackageList;
    const tendencyData = categoryData.성향별상품;
    console.log(tendencyData);
    return tendencyData;
  } catch (error) {
    console.log('error');
  }
};

export const getAgeData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: ['연령별상품'],
    });

    const mainData = response.data.data;
    const categoryData = mainData.mainCategoryPackageList;
    const ageData = categoryData.연령별상품;
    console.log(ageData);
    return ageData;
  } catch (error) {
    console.log('error');
  }
};

export const getReligionData = async () => {
  try {
    const response = await axios.post<ResponseType>(API_URL.POST.MAIN, {
      categoryList: ['종교별상품'],
    });

    const mainData = response.data.data;
    const religionData = mainData.mainCategoryPackageList.종교별상품;
    console.log(religionData);
    return religionData;
  } catch (error) {
    console.log('error');
  }
};
