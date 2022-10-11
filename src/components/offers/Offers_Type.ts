export interface getOfferData {
  id: number;
  title: string;
  categoryResponseDtoList: {
    id: number;
    title: string;
    subCategoryResponseDtoList: null;
    dispFlg: boolean;
    createdAt: null;
    updatedAt: null;
  };
  mainImage: string;
  descriptionImage: string[];
  price: string;
  summary: string;
  requiredOptionName: string;
  requiredOptionValues: string;
  optionalName: string;
  optionalValues: string;
  flightInfo: string;
  soldoutFlg: boolean;
  dispFlg: boolean;
  createdAt: string;
  updatedAt: string;
  searchKeyword: string[];
  deletedFlg: boolean;
  mainBannerFlg: boolean;
}
