export interface ResponseType {
  data: {
    bestReviewList: {
      author: string;
      contents: string;
      id: number;
      mainImage: string;
      title: string;
      updatedAt: string;
    };
    mainBannerList: {
      id: number;
      imageUrl: string;
      keyword: string;
      price: string;
      title: string;
    };
    mainCategoryPackageList: {
      그룹별상품: {
        id: number;
        imageUrl: string;
        keyword: string;
        price: string;
        summary: string;
        tag: string;
        title: string;
      };
      성향별상품: {
        id: number;
        imageUrl: string;
        keyword: string;
        price: string;
        summary: string;
        tag: string;
        title: string;
      };
      연령별상품: {
        id: number;
        imageUrl: string;
        keyword: string;
        price: string;
        summary: string;
        tag: string;
        title: string;
      };
      종교별상품: {
        id: number;
        imageUrl: string;
        keyword: string;
        price: string;
        summary: string;
        tag: string;
        title: string;
      };
      지역별상품: {
        id: number;
        imageUrl: string;
        keyword: string;
        price: string;
        summary: string;
        tag: string;
        title: string;
      };
      테마별상품: [
        {
          id: number;
          imageUrl: string;
          keyword: string;
          price: string;
          summary: string;
          tag: string;
          title: string;
        }
      ];
      기획전상품: [
        {
          id: number;
          imageUrl: string;
          keyword: string;
          price: string;
          summary: string;
          tag: string;
          title: string;
        }
      ];
    };
  };
  message: string;
  pagination: number;
  statusCode: number;
}

export interface CurationResponse {
  data: [];
  message: string;
  pagination: number;
  statusCode: number;
}

export interface Test {
  id: number;
  imageUrl: string;
  keyword: string;
  price: string;
  summary: string;
  tag: string;
  title: string;
}
