import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <Logo>
          <img src='https://cdn.imweb.me/thumbnail/20220626/f70356446610d.png' alt=''></img>
        </Logo>
        <SearchBox>
          <img src={process.env.PUBLIC_URL + '/icons/search.png'} alt=''></img>
          <input type='text' placeholder='여행 그룹이나 상품을 검색해보세요'>
          </input>
        </SearchBox>
        <IconGroup>
          <img src={process.env.PUBLIC_URL + '/icons/cart.png'} alt=''></img>
          <img src={process.env.PUBLIC_URL + '/icons/login.png'} alt=''></img>
          <img src={process.env.PUBLIC_URL + '/icons/member.png'} alt=''></img>
        </IconGroup>
      </HeaderWrapper>
    </Container>
  )
}

export default Header;


const Container = styled.div`
  width: 100%;
  height: 72px;
`;

const HeaderWrapper = styled.header`
  width: 1184px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const Logo = styled.div`
  width: 150px;
  height: 29px;
  margin: 25px 10px 25px 0;
`;

const SearchBox = styled.div`
  width: 326px;
  height: 48px;
  background-color: #f2f2f2;
  line-height: 48px;
  margin: auto 0;
  display: flex;

  img {
    width: 24px;
    height: 24px;
    margin: auto 5px;
  }

  input {
    width: 100%;
  }
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  width: 280px;
  justify-content: space-around;

  img {
    width: 83px;
    height: 40px;
    margin: auto 0;
  }
`;
