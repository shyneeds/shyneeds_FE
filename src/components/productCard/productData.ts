/* Dummy Data */

export interface IProductData {
  id: number;
  img: string;
  title: string;
  tag: string;
  content: string;
  price: string;
}

export const productData: IProductData[] = [
  {
    id: 0,
    img: 'https://static.hubzum.zumst.com/hubzum/2018/06/25/14/d6c40f900561471d9970f5dbf22f2cc9.jpg',
    title: '여성들만',
    tag: 'Woman only',
    content: '파타고니아 14일',
    price: '8,090,000',
  },
  {
    id: 1,
    img: 'https://wishbeen-seoul.s3.ap-northeast-2.amazonaws.com/plan/1463029230608__%EC%8A%AC%EB%A1%9C%EB%B2%A0%EB%8B%88%EC%95%8403.jpg',
    title: '남성들만',
    tag: 'Man only',
    content: '치앙마이 GOLTTEL 레거시 CC 5, 6일',
    price: '3,890,000',
  },
  {
    id: 2,
    img: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/35E1_5Rgir3jPaF75bqrjQR2ENk',
    title: '어른이들만',
    tag: 'Active Senior',
    content: '버킷리스트 중남미 6개국 28일',
    price: '16,900,000',
  },
  {
    id: 3,
    img: 'https://wishbeen-seoul.s3.ap-northeast-2.amazonaws.com/plan/1460453012183_GreeceOia.jpg',
    title: '아이들과',
    tag: 'With Child',
    content: '영국 본섬 잉글랜드 하이랜드 스카이섬...',
    price: '3,890,000',
  },
];
