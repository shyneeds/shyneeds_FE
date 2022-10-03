import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  let now = new Date();
  let year = now.getFullYear();

  return (
    <FooterWrap>
      <FooterInner>
        <FooterTop>
          <Corp>
            <li>안심카드결제</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>여행약관</li>
          </Corp>
          <SnsIcon>
          <li><img src= {process.env.PUBLIC_URL + '/icons/insta.png'} alt='' style={{width:22}}/></li>
          <li><img src= {process.env.PUBLIC_URL + '/icons/insta.png'} alt='' style={{width:22}}/></li>
          <li><img src= {process.env.PUBLIC_URL + '/icons/insta.png'} alt='' style={{width:22}}/></li>
          <li><img src= {process.env.PUBLIC_URL + '/icons/insta.png'} alt='' style={{width:22}}/></li>
          <li><img src= {process.env.PUBLIC_URL + '/icons/insta.png'} alt='' style={{width:22}}/></li>
          </SnsIcon>
        </FooterTop>
        <FooterMiddle>
          <Customer>
            <p><em>고객센터</em>오전 9시 - 오후 6시 토/일요일 및 공휴일 휴무</p>
            <span>02-6105-7711</span>
          </Customer> 
          <Account>
            <p>입금계좌</p>
            <span>KEB하나은행 267-910020-36604</span>
            <em>(주)더샤이니</em>
          </Account>
        </FooterMiddle>
        <div>
          <Info>
            <div>
              <p>상호명 : (주)더샤이니</p>
              <p>대표 : 김소영</p>
              <p>개인정보보호책임자: 김승덕</p>
              <p>주소: 서울특별시 중구 청계천로40(한국관광공사 서울센터) 707호</p>
            </div>
            <div>
              <p>사업자등록번호: 495-87-02492</p>
              <p>통신판매업신고번호: 2021-서울중구-2450</p>
              <p>이메일: gotogether@shinytravels.com</p>
            </div>
          </Info>
          <Cancell>
            <p>고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에 대하여 책임을 집니다.</p>
            <p>고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.</p>
          </Cancell>
          <p>copyright ⓒ {year} 고투게더 All rights reserved.</p>
        </div>
      </FooterInner>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  padding: 50px 0;
`;
const FooterInner = styled.div`
  width: 1184px;
  margin: 0 auto;
`;
const FooterTop = styled.div`
  &:after {
  content: '';
  display: block;
  clear: both;
  }
`;
const Corp = styled.ul`
  width: 60%;
  float: left;
  margin: 0 0 60px;
  > li{
    float: left;
    margin: 0 30px 0 0;
  }
`;
const SnsIcon = styled.ul`
  width: 40%;
  float: left;
  > li{
    float: left;
    margin: 0 10px 0 0;
  }
`;
const FooterMiddle = styled.div`
  margin: 0 0 25px;
  &:after {
  content: '';
  display: block;
  clear: both;
  }
`;
const Customer = styled.div`
  width: 60%;
  float: left;
  > span{
  font-size: 1.5rem;
  font-weight: bold;
  }
  > p{
  margin: 0 0 15px;
  }
  > p > em {
  font-weight: bold;
  padding: 0 5px 0 0;
  }
`;
const Account = styled.div`
  width: 40%;
  float: left;
  > span{
  display: block;
  margin: 6px 0;
  font-weight: bold;  
  }
`;

const Info = styled.div`
  margin: 0 0 20px;
  > div{
    margin: 0 0 6px;
  }
  > div > p {
    display: inline-block;
    padding: 0 5px;
    border-right: 1px solid #000;
    line-height: 12px;
  }
  > div > p:first-child{
    padding-left: 0;
  }
  > div > p:last-child{
    border-right: 0;
  }
`;
const Cancell = styled.div`
  margin: 0 0 20px;
  > p {
    margin: 0 0 6px;
  }
`;

export default Footer;