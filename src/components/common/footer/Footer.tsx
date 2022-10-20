import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DomesticOverseas, Policy, Privacy } from './Modal';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  // props 이용해서 간소화시키는 작업 고민중
  const [modalOpen1, setModalOpen1] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const [modalOpen3, setModalOpen3] = useState<boolean>(false);

  const onToggleModal1 = useCallback(() => {
    setModalOpen1(!modalOpen1);
  }, [modalOpen1]);
  const onToggleModal2 = useCallback(() => {
    setModalOpen2(!modalOpen2);
  }, [modalOpen2]);
  const onToggleModal3 = useCallback(() => {
    setModalOpen3(!modalOpen3);
  }, [modalOpen3]);

  return (
    <FooterWrap>
      <FooterInner>
        <FooterTop>
          <Customer>
            <p>고객센터</p>
            <InfoNum>02 - 6105 - 7711</InfoNum>
            <span>오전 9시 - 오후 6시</span>
            <span>토 / 일요일 및 공휴일 휴무</span>
          </Customer>
          <Account>
            <p>입금계좌</p>
            <InfoNum>267 - 910020 - 36604</InfoNum>
            <span>KEB 하나은행</span>
            <span>(주)더샤이니</span>
          </Account>
        </FooterTop>
        <FooterMiddle>
          <Corp>
            <li>
              <Link to="/community">커뮤니티(임시)</Link>
            </li>
            <li>
              <Link to="/mypage">마이페이지(임시)</Link>
            </li>
            <li>안심카드결제</li>
            <li onClick={onToggleModal1}>이용약관</li>
            {modalOpen1 && <Privacy onToggleModal={onToggleModal1} />}
            <li onClick={onToggleModal2}>개인정보처리방침</li>
            {modalOpen2 && <Policy onToggleModal={onToggleModal2} />}
            <li onClick={onToggleModal3}>여행약관</li>
            {modalOpen3 && <DomesticOverseas onToggleModal={onToggleModal3} />}
          </Corp>
          <SnsIcon>
            <li>
              <Link to="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.gotogether-s.com%2F">
                <img
                  src={
                    process.env.PUBLIC_URL + '/icons/ic-facebook-20x20-500.svg'
                  }
                  alt="icon-facebook"
                />
              </Link>
            </li>
            <li>
              <Link to="http://share.naver.com/web/shareView.nhn?url=https%253A%252F%252Fwww.gotogether-s.com%252F&title=%EA%B3%A0%ED%88%AC%EA%B2%8C%EB%8D%94">
                <img
                  src={
                    process.env.PUBLIC_URL + '/icons/ic-blog-20x20-500-2.svg'
                  }
                  alt="icon-blog"
                />
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src={
                    process.env.PUBLIC_URL + '/icons/ic-instagram-20x20-500.svg'
                  }
                  alt="icon-instagram"
                />
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/Jm3TiJ5lFKQ?list=TLGGJtDTxTICk8AwNTEwMjAyMg">
                <img
                  src={
                    process.env.PUBLIC_URL + '/icons/ic-youtube-20x20-500.svg'
                  }
                  alt="icon-youtube"
                />
              </Link>
            </li>
            <li>
              <Link to="https://band.us/plugin/share?body=%EA%B3%A0%ED%88%AC%EA%B2%8C%EB%8D%94%0Ahttps%3A%2F%2Fwww%2egotogether-s%2ecom%2F&route=https%3A%2F%2Fwww%2egotogether-s%2ecom%2F">
                <img
                  src={process.env.PUBLIC_URL + '/icons/ic-band-20x20-500.svg'}
                  alt="icon-band"
                />
              </Link>
            </li>
          </SnsIcon>
        </FooterMiddle>
        <Logo>
          <img
            src={process.env.PUBLIC_URL + '/icons/logo-ci-the-shiny.svg'}
            alt="icon-ci-the-shiny"
            style={{ width: 200 }}
          />
        </Logo>
        <FooterBottom>
          <Info>
            <div>
              <p>상호명 : (주)더샤이니</p>
              <p>대표 : 김소영</p>
              <p>개인정보보호책임자: 김승덕</p>
              <p>
                주소: 서울특별시 중구 청계천로40(한국관광공사 서울센터) 707호
              </p>
            </div>
            <div>
              <p>사업자등록번호: 495-87-02492</p>
              <p>통신판매업신고번호: 2021-서울중구-2450</p>
              <p>이메일: gotogether@shinytravels.com</p>
            </div>
          </Info>
          <Cancel>
            <p>
              고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에
              대하여 책임을 집니다.
            </p>
            <p>
              고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
              상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
            </p>
          </Cancel>
          <p>copyright ⓒ {year} 고투게더 All rights reserved.</p>
        </FooterBottom>
      </FooterInner>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  padding: 30px 0 50px;
  border-top: 1px solid #eeeeee;
`;
const FooterInner = styled.div`
  width: 1184px;
  margin: 0 auto;
`;
const FooterTop = styled.div`
  margin: 0 0 30px;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  p {
    margin: 0 0 20px;
    color: #666;
  }
  span {
    display: block;
    color: #666;
  }
  span:nth-child(n + 1) {
    margin: 10px 0 0;
  }
`;
const InfoNum = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;
const Customer = styled.div`
  width: 50%;
  float: left;
`;
const Account = styled.div`
  width: 50%;
  float: left;
`;

const Corp = styled.ul`
  float: left;
  > li {
    float: left;
    margin: 0 30px 0 0;
    color: #666666;
  }
  > li img {
    width: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
const SnsIcon = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  > li {
    margin: 0 20px 0 0;
  }
`;
const FooterMiddle = styled.div`
  padding: 30px 0 0;
  border-top: 1px solid #eeeeee;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;
const Logo = styled.div`
  padding: 30px 0;
`;
const FooterBottom = styled.div`
  p {
    color: #666;
  }
`;
const Info = styled.div`
  margin: 0 0 20px;
  > div {
    margin: 0 0 6px;
  }
  > div > p {
    display: inline-block;
    padding: 0 5px;
    border-right: 1px solid #000;
    line-height: 12px;
  }
  > div > p:first-child {
    padding-left: 0;
  }
  > div > p:last-child {
    border-right: 0;
  }
`;
const Cancel = styled.div`
  margin: 0 0 20px;
  > p {
    margin: 0 0 6px;
  }
`;

export default Footer;
