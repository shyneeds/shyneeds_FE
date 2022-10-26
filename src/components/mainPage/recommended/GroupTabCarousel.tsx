import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
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
  slidesToScroll: 1,
};

export const GroupTabCarousel = () => {
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
        <SliderWrap key={data.id}>
          <GroupWrap>
            <GroupImage>
              <img src={data.imageUrl} alt="group_tab_image" />
            </GroupImage>
            <GroupText>
              <GroupTitle>{data.title}</GroupTitle>
              <GroupContent>{data.summary}</GroupContent>
              <StyledLink to={'offers'}>
                <p>상품 보기</p>
                <BiChevronRight size="20px" />
              </StyledLink>
            </GroupText>
          </GroupWrap>
        </SliderWrap>
      ))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 40px;
    height: 40px;
    margin-left: 2px;
    margin-right: 2px;
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
  // .slick-prev:hover {
  //   box-shadow: 0 8px 15px 4px #f0f0f0;
  // }
  // .slick-next:hover {
  //   box-shadow: 0 8px 15px 4px #f0f0f0;
  // }
}
`;

const SliderWrap = styled.div`
  background-color: #f6f6f6;
  border-top: 2px solid #ccc;
`;

const GroupWrap = styled.div`
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  display: flex;
  padding: 20px;

  &:hover {
    background-color: #fff;
    border-bottom: none;

    .slick-next,
    .slick-prev {
      width: 40px;
      height: 40px;
      z-index: 2;
      top: 50%;
    }
  }
`;

const GroupImage = styled.div`
  height: 68px;
  width: 68px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const GroupText = styled.div`
  position: relative;
  left: 1.5rem;
`;

const GroupTitle = styled.div`
  width: 6rem;
  height: 1rem;
`;

const GroupContent = styled.div`
  width: 8rem;
  height: 1rem;
  margin-top: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledLink = styled(Link)`
  width: 6rem;
  height: 1rem;
  font-size: 1rem;
  color: #429bf4;
  display: flex;
  align-items: center;
  margin-top: 0.9rem;
`;
