import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Key, SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../app/store';
import { useAppSelector } from '../../../../app/hooks';
import axios from 'axios';
import {
  bannerData,
  getBannerProductData,
} from '../../../../features/main/productSlice';
import { API_URL } from '../../../../constants/API_URL';
import { ResponseType } from '../../../../utils/ResponseType';
import { BannerSlider } from './BannerSlider';
import { IoMdHeartEmpty } from 'react-icons/io';

export const MainBanner = () => {
  // 백엔드 데이터 작업중으로 현재는 호출 안됨
  const options_group = [
    { value: '5070', text: '5070' },
    { value: '2040끼리', text: '2040끼리' },
    { value: '여자끼리', text: '여자끼리' },
    { value: '남자끼리', text: '남자끼리' },
    { value: '자녀동반', text: '자녀동반' },
    { value: '누구든지', text: '누구든지' },
  ];
  const options_region = [
    { value: '동남아/태평양', text: '동남아/태평양' },
    { value: '인도/중앙아시아', text: '인도/중앙아시아' },
    { value: '아프리카/중동', text: '아프리카/중동' },
    { value: '유럽/코카서스', text: '유럽/코카서스' },
    { value: '중남미/북미', text: '중남미/북미' },
    { value: '대만/중국/일본', text: '대만/중국/일본' },
    { value: '터키', text: '터키' },
  ];
  const options_theme = [
    { value: '문화탐방', text: '문화탐방' },
    { value: '골프여행', text: '골프여행' },
    { value: '휴양지', text: '휴양지' },
    { value: '트레킹', text: '트레킹' },
    { value: '성지순례', text: '성지순례' },
    { value: '볼론투어', text: '볼론투어' },
  ];
  const [selected1, setSelected1] = useState(options_group[0].value);
  const [selected2, setSelected2] = useState(options_region[0].value);
  const [selected3, setSelected3] = useState(options_theme[0].value);

  const handleChange1 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    // console.log(event.target.value);
    setSelected1(event.target.value);
  };

  const handleChange2 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    // console.log(event.target.value);
    setSelected2(event.target.value);
  };

  const handleChange3 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    // console.log(event.target.value);
    setSelected3(event.target.value);
  };

  const dispatch = useAppDispatch();
  const products = useAppSelector(bannerData);

  const getBannerData: any = async () => {
    try {
      const res = await axios.post<ResponseType>(API_URL.POST.MAIN, {
        categoryList: [],
      });
      const bannerData = res.data.data.mainBannerList;
      dispatch(getBannerProductData(bannerData));
      return bannerData;
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    getBannerData();
  }, []);

  const test: any = [...products];
  const inquiries: any = test.filter((data: any) => {
    if (
      data.keyword.toLocaleLowerCase().includes(selected1) &&
      data.keyword.toLocaleLowerCase().includes(selected2) &&
      data.keyword.toLocaleLowerCase().includes(selected3)
    ) {
      return data;
    }
  });
  // console.log(inquiries);

  const [isResult, setIsResult] = useState<boolean>(false);
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <BannerSlider />
      <Wrapper_Left>
        <CurationBox>
          <Select
            onClick={() => setIsResult(false)}
            value={selected1}
            onChange={handleChange1}
          >
            {options_group.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
          <Select value={selected2} onChange={handleChange2}>
            {options_region.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
          <Select value={selected3} onChange={handleChange3}>
            {options_theme.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
          <p>여행을 가고 싶어요</p>
          <SearchBtn onClick={() => setIsResult(true)}>
            <img
              src={process.env.PUBLIC_URL + '/icons/main-icon/btn.svg'}
              alt="main_icon_btn"
            />
          </SearchBtn>
        </CurationBox>
      </Wrapper_Left>
      {isResult ? (
        <Wrapper_Right>
          <ResultBox {...settings}>
            {inquiries.map(
              (inquiry: {
                price: number | null;
                summary: string | null;
                title: string | null;
                imageUrl: string | undefined;
                keyword: string | null;
                id: Key;
              }) => (
                <Link to={'detail/' + inquiry.id} key={inquiry.id}>
                  <ProductWrap>
                    <img src={inquiry.imageUrl} alt="product_image" />
                    <ProductText>
                      <Title>{inquiry.title}</Title>
                      {/* <Content>{inquiry.summary}</Content> */}
                      {/* <Price>{inquiry.price} 원</Price> */}
                    </ProductText>
                    <IoMdHeartEmpty size="20px" className="wish-icon" />
                  </ProductWrap>
                </Link>
              )
            )}
          </ResultBox>
          {/* 
          <SliderBtn>
            <img
              src={
                process.env.PUBLIC_URL +
                '/icons/main-icon/ic-chevron-left-40x40-050.svg'
              }
              alt="ic-chevron-left-btn"
            />
            <img
              src={
                process.env.PUBLIC_URL +
                '/icons/main-icon/ic-chevron-right-40x40-900.svg'
              }
              alt="ic-chevron-right-btn"
            />
          </SliderBtn> */}
        </Wrapper_Right>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 960px;
  position: relative;
`;

const Wrapper_Left = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper_Right = styled.div`
  width: 600px;
  height: 500px;
  position: absolute;
  top: 200px;
  left: 968px;
  padding: 8px;
`;

const CurationBox = styled.ul`
  width: 475px;
  height: 400px;
  position: absolute;
  top: 196px;
  left: 368px;
  font-size: 64px;

  > p {
    color: #cccccc;
    word-break: keep-all;
  }
`;

const ResultBox = styled.div`
  width: 584px;
  height: 426px;
  display: flex;
  top: 200px;
  left: 968px;

  .slick-next,
  .slick-prev {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 2;
    top: 92%;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 0;
  }
  .slick-prev {
    background: url(process.env.PUBLIC_URL + '/icons/main-icon/ic-chevron-left-40x40-050.svg')
      no-repeat;
  }
  .slick-next {
    background: url(process.env.PUBLIC_URL + '/icons/main-icon/ic-chevron-right-40x40-900.svg')
      no-repeat;
  }
`;

const Select = styled.select`
  height: 88px;
  font-size: 64px;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const SearchBtn = styled.button`
  width: 148px;
  height: 48px;
  position: relative;
  top: 36px;

  img {
    width: 148px;
    height: 48px;
  }

  &:hover {
    cursor: pointer;
  }
`;

// const SliderBtn = styled.button`
//   width: 40px;
//   height: 40px;
//   position: relative;
//   display: flex;
//   gap: 40px;
//   top: 24px;
//   left: 82px;

//   img {
//     width: 40px;
//     height: 40px;
//   }

//   &:hover {
//     cursor: pointer;
//   }
// `;

const ProductWrap = styled.div`
  width: 284px;
  height: 416px;
  background-color: #eee;
  border-radius: 10px;
  border: 1px solid #cccccc;
  overflow: hidden;
  position: relative;
  margin: 5px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 5px 3px #f0f0f0;
    transform: translate3d(0px, -3px, 0px);
    transition: all 0.15s ease-in;
  }

  .wish-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    index: 1;
  }

  > img {
    height: 284px;
  }
`;

const ProductText = styled.div`
  width: 236px;
  height: 56px;
  padding: 20px 24px;
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;

const Content = styled.p`
  color: #666666;
  height: 4rem;
  font-size: 1rem;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.p`
  margin: 20px 0 0;
  font-size: 1.18rem;
  font-weight: bold;
`;
