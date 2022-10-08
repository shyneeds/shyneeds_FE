import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { productData } from './productData';

export const ProductCard = () => {
  return (
    <CardContainer>
      {productData.map((productData) => (
        <ProductWrap key={productData.id}>
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
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 18rem;
  position: relative;
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
`;

const ProductText = styled.div`
  padding: 22px;
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 1.18rem;
  font-weight: bold;
`;

const Content = styled.span`
  color: #666666;
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
  bottom: 10rem;
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
