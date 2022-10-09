import styled from 'styled-components';
import { productData } from '../productCard/productData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
};

export const GroupCarousel = () => {
  return (
    <CarouselContainer {...settings}>
      {productData.map((groupData) => (
        <SliderWrap key={groupData.id}>
          <GroupWrap>
            <GroupImage>
              <img src={groupData.tab_img} alt="group_tab_image" />
            </GroupImage>
            <GroupText>
              <GroupTitle>{groupData.tag}</GroupTitle>
              <GroupContent>{groupData.content}</GroupContent>
              <StyledLink to={'admin'}>
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
  border-right: 2px solid #cccccc;
  border-left: 1px solid #ccc;

  &:hover {
    .slick-next,
    .slick-prev {
      width: 40px;
      height: 40px;
      z-index: 99999;
      top: 50%;
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
    .slick-prev:hover {
      box-shadow: 0 8px 15px 4px #f0f0f0;
    }
    .slick-next:hover {
      box-shadow: 0 8px 15px 4px #f0f0f0;
    }
  }
`;

const SliderWrap = styled.div`
  background-color: #f6f6f6;
  border-top: 2px solid #ccc;
  // border-right: 1px solid #ccc;
  // border-left: 1px solid #ccc;
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
      z-index: 99999;
      top: 50%;
    }
  }
`;

const GroupImage = styled.div`
  width: 40%;
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
