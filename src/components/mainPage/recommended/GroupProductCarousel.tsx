import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { productData } from '../../../utils/productData';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
};

export const GroupProductCarousel = () => {
  return (
    <CarouselContainer {...settings}>
      {productData.map((productData) => (
        <Link to={productData.url} key={productData.id}>
          <CardContainer>
            <ProductWrap key={productData.id}>
              <ProductImg src={productData.imageUrl} alt="product_image" />
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
    z-index: 99999;
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
  height: 100%;

  &:hover {
    cursor: pointer;
    top: -5px;
    box-shadow: 0 12px 16px 5px #f0f0f0;
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
  width: 100%;
  height: 56%;
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
