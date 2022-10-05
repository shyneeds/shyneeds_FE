import { useState } from 'react';
import styled from 'styled-components';
import { HeaderBanner } from '../banner/HeaderBanner';
import { NavLogIn, NavLogOut } from '../navBar/NavBar';

function Header() {
  const [show, setShow] = useState(true);
  const isLoggedIn = true;

  return (
    <Container>
      <BannerWrapper>
        {show ? <HeaderBanner onClose={setShow} /> : null}
      </BannerWrapper>
      <>
        <HeaderNav>
          <Logo>
            <a href="/">
              <img
                src="https://cdn.imweb.me/thumbnail/20220626/f70356446610d.png"
                alt=""
              />
            </a>
          </Logo>
          <SearchBox>
            <img
              src={process.env.PUBLIC_URL + '/icons/search.png'}
              alt="search.png"
            />
            <input
              type="text"
              placeholder="여행 그룹이나 상품을 검색해보세요"
            />
          </SearchBox>
          <IconGroup>{isLoggedIn ? <NavLogIn /> : <NavLogOut />}</IconGroup>
        </HeaderNav>
      </>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  height: 100%;
`;

const BannerWrapper = styled.div`
  position: relative;
  // display: none;
`;

const HeaderNav = styled.nav`
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
  margin-left: auto;
  width: 27rem;
  display: flex;
  justify-content: space-around;
`;
