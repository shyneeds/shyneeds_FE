export interface getProductData {
  categoryResponseDtoList: {
    createdAt: null;
    dispFlg: boolean;
    id: number;
    subCategoryResponseDtoList: null;
    title: string;
    updatedAt: null;
  };
  createdAt: string;
  deletedFlg: boolean;
  descriptionImage: string[];
  dispFlg: boolean;
  id: number;
  mainBannerFlg: boolean;
  mainImage: string;
  packageOptionResponseDto: any;
  price: string;
  searchKeyword: string[];
  soldoutFlg: boolean;
  summary: string;
  title: string;
  updatedAt: string;
}

export interface postAdminProductData {
  title: string;
  categoryIds: number[];
  subCategoryIds: number[];
  thirdCategoryIds: number[];
  price: string;
  summary: string;
  requiredOptionName: string;
  requiredOptionValues: string;
  optionalName: string;
  optionalValues: string;
  flightInfo: string;
  soldoutFlg: boolean;
  dispFlg: boolean;
  searchKeyword: string[];
}
