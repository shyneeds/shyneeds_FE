import styled from 'styled-components';
import { IoMdHeartEmpty } from "react-icons/io";
import { images } from '../.././assets/image';
import { Default, Mobile } from "../../assets/mediaQuery";

export const PersonalGoods = () => {
  return (
    <>
      <Default>
        <PersonalGoodsStylesD>
            <GoodsImageStyles src={images[0]} />
              <IoMdHeartEmpty size="20px" className='wishBtn'/>
              <GoodsTitleStyles>
                <p>5070 이제 가보자!<br />스위스 알프스 트래킹 초급 10일</p>
              </GoodsTitleStyles>
              <GoodsPriceStyles>
                <p>5,890,000원</p>
              </GoodsPriceStyles>
          </PersonalGoodsStylesD>
      </Default>
      <Mobile>
        <PersonalGoodsStylesM>
          <GoodsImageStyles src={images[1]} />
            <IoMdHeartEmpty size="20px" className='wishBtn'/>
            <GoodsTitleStyles>
              <p>5070 이제 가보자!<br />스위스 알프스 트래킹 초급 10일</p>
            </GoodsTitleStyles>
            <GoodsPriceStyles>
              <p>5,890,000원</p>
            </GoodsPriceStyles>
        </PersonalGoodsStylesM>
      </Mobile>
    </>

  )
}

const PersonalGoodsStylesD = styled.div`
  width: 18rem;
  position: relative;

  .wishBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    index: 1;
  }
`

const PersonalGoodsStylesM = styled.div`
  width: 100%;
  position: relative;

  .wishBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    index: 1;
  }
`

const GoodsImageStyles = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`

const GoodsTitleStyles = styled.div`
  padding: 1.2rem 0 0 0.6rem;
`

const GoodsPriceStyles = styled.div`
  padding: 1.2rem 0 0 0.6rem;
  color: #aaa;
`
