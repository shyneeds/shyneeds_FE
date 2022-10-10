export interface getData {
  title: string;
  price: string;
  summary: string;
  searchKeyword: string[];
  mainImage: string;
  updatedAt: string;
}

export interface postData {
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
