import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { API_URL } from '../../../constants/API_URL';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  getGroupProductData,
  groupData,
} from '../../../features/main/productSlice';
import { useEffect } from 'react';
import { ResponseType } from '../../../utils/ResponseType';

const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
};

export const GroupProductCarousel = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(groupData);
  const getGroupData: any = () => {
    axios
      .post<ResponseType>(API_URL.POST.MAIN, {
        categoryList: ['그룹별상품'],
      })
      .then((res) => {
        const mainData = res.data.data;
        const groupData = mainData.mainCategoryPackageList.그룹별상품;
        dispatch(getGroupProductData(groupData));
        return groupData;
      })
      .catch(() => {
        console.log('error');
      });
  };

  useEffect(() => {
    getGroupData();
  }, []);

  return (
    <CarouselContainer {...settings}>
      {products.map((data: any) => (
        <Link to={'offers/' + data.id} key={data.id}>
          <CardContainer>
            <ProductWrap key={data.id}>
              <ProductImg src={data.imageUrl} alt="product_image" />
              <ProductText>
                <Title>{data.title}</Title>
                <Content>{data.summary}</Content>
                <Price>{data.price} 원</Price>
              </ProductText>
              <ProductTag>
                <TagTitle>{data.keyword}</TagTitle>
              </ProductTag>
              <IoMdHeartEmpty size="20px" className="wish-icon" />
            </ProductWrap>
          </CardContainer>
        </Link>
      ))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 2;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 0;
  }
  .slick-prev {
    background: url('/icons/ic-chevron-left-40x40-050.svg') no-repeat;
  }
  .slick-next {
    background: url('/icons/ic-chevron-right-40x40-050.svg') no-repeat;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 272px 272px 272px 272px;
  grid-template-rows: 320px;
  grid-gap: 14px;
`;

const ProductWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
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
`;

const ProductImg = styled.img`
  width: 272px;
  height: 180px;
`;

const ProductText = styled.div`
  padding: 22px;
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 1rem;
  font-weight: bold;
`;

const Content = styled.span`
  color: #666666;
  font-size: 1rem;
  line-height: 22px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.p`
  margin: 20px 0 0;
  font-size: 1.1rem;
  font-weight: bold;
`;

const ProductTag = styled.div`
  position: absolute;
  bottom: 9.5rem;
  right: 0.5rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 6rem;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagTitle = styled.p`
  font-size: 0.8rem;
`;
