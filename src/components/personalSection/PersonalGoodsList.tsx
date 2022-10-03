import styled from 'styled-components';
import { PersonalGoods } from './PersonalGoods';
import { Default, Mobile } from "../../assets/mediaQuery";

export const PersonalGoodsList = () => {
  return (
    <>
      <Default>
        <PersonalGoodsListStyles>
          <PersonalGoods />
          <PersonalGoods />
          <PersonalGoods />
        </PersonalGoodsListStyles>
      </Default>
      <Mobile>
        <PersonalGoodsListStyles>
          <PersonalGoods />
        </PersonalGoodsListStyles>
      </Mobile>
    </>
  )
}

const PersonalGoodsListStyles = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 25rem;
  // background-color: #999;
`
