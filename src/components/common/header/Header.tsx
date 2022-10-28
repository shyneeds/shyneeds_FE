import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { LAYOUT } from '../../../constants/layout';
import { authenticated } from '../../../features/kakaoLogin/kakaoLoginSlice';
import { HeaderBanner } from './HeaderBanner';
import { Navbar } from './Navbar';
import { LogInView, LogOutView } from './UserMenu';

const Header = () => {
  const [openBanner, setOpenBanner] = useState<boolean>(true);
  const [hasCookies, setHasCookies] = useState<boolean>(true);
  const [appCookies, setAppCookies] = useCookies<string>([]);
  const [cookies, setCookie] = useCookies(['token']);
  const getExpiredData = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeBannerUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredData(1);
    setAppCookies('HEADER_BANNER_EXPIRES', true, { path: '/', expires });

    setOpenBanner(false);
  };

  useEffect(() => {
    if (appCookies['HEADER_BANNER_EXPIRES']) return;
    // console.log(appCookies['HEADER_BANNER_EXPIRES']);
    setHasCookies(false);
  }, []);

  return (
    <>
      <>
        {/* 작업 편의를 위한 주석 처리 */}
        {/* {openBanner && !hasCookies && (
          <HeaderBanner
            closeBanner={() => setOpenBanner(false)}
            closeBannerUntilExpires={closeBannerUntilExpires}
          />
        )} */}
      </>

      <Container>
        <Wrapper>
          <Logo>
            <Link to="/">
              <img
                src="https://cdn.imweb.me/thumbnail/20220626/f70356446610d.png"
                alt=""
              />
            </Link>
          </Logo>
          <InputBox>
            <img
              src={process.env.PUBLIC_URL + '/icons/search.png'}
              alt="search.png"
            />
            <input
              type="text"
              placeholder="여행 그룹이나 상품을 검색해보세요"
            />
          </InputBox>
          <UserMenu>
            {Object.keys(cookies).length === 0 ? <LogInView /> : <LogOutView />}
          </UserMenu>
        </Wrapper>
        <Navbar />
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  z-index: 999;
`;

const Wrapper = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 147px;
  height: 24px;
  margin-right: 20px;
`;

const InputBox = styled.div`
  width: 326px;
  height: 48px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  margin: 12px;
  padding: 12px;

  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 8px;
  }

  input {
    width: 220px;
    height: 24px;
    padding: 12px 0;
  }
`;

const UserMenu = styled.div`
  margin-left: auto;
  width: 22rem;
  display: flex;
  justify-content: space-between;
`;
