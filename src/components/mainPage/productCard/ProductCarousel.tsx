import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { productData } from './productData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { getProductData } from './getProductData';
import { useEffect } from 'react';

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
};

getProductData();

export const ProductCarousel = () => {
  return (
    <CarouselContainer {...settings}>
      {productData.map((productData) => (
        <Link to={productData.url} key={productData.id}>
          <ProductWrap>
            <img src={productData.img} alt="product_image" />
            <ProductText>
              <Title>{productData.title}</Title>
              <Content>{productData.content}</Content>
              <Price>{productData.price} 원</Price>
            </ProductText>
            <ProductTag>
              <TagTitle>{productData.tag}</TagTitle>
            </ProductTag>
            <IoMdHeartEmpty size="20px" className="wish-icon" />
          </ProductWrap>
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
    z-index: 99999;
    top: 52%;
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

const ProductWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #cccccc;
  overflow: hidden;
  position: relative;

  .wish-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    index: 1;
  }

  > img {
    height: 13rem;
  }
`;

const ProductText = styled.div`
  height: 12rem;
  padding: 22px;
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 1.18rem;
  font-weight: bold;
`;

const Content = styled.p`
  color: #666666;
  height: 4rem;
  font-size: 1rem;
  line-height: 22px;
`;

const Price = styled.p`
  margin: 20px 0 0;
  font-size: 1.18rem;
  font-weight: bold;
`;

const ProductTag = styled.div`
  position: absolute;
  top: 10rem;
  right: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 8rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagTitle = styled.p`
  font-size: 0.9rem;
`;
