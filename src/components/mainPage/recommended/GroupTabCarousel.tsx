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
import { useEffect, useState } from 'react';
import { ResponseType } from '../../../utils/ResponseType';

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
};

export const GroupTabCarousel = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(groupData);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const onClick = (): void => {
    setIsSelected(!isSelected);
  };
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
        <SliderWrap onClick={onClick} key={data.id}>
          {isSelected ? (
            <GroupWrap1>
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
            </GroupWrap1>
          ) : (
            <GroupWrap2>
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
            </GroupWrap2>
          )}
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
}
`;

const SliderWrap = styled.div`
  border-top: 2px solid #ccc;
`;

const GroupWrap1 = styled.div`
  background-color: #f5f5f5;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  display: flex;
  padding: 20px;
`;

const GroupWrap2 = styled.div`
  background-color: #fff;
  // border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  display: flex;
  padding: 20px;
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
