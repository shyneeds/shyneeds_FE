import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { LAYOUT } from '../../constants/layout';
import { authenticated } from '../../features/kakaoLogin/kakaoLoginSlice';
import Footer from '../common/footer/Footer';
import { Navbar } from '../common/header/Navbar';
import { LogInView, LogOutView } from '../common/header/UserMenu';
import Pagination from '../community/Pagination';

const Subpage = () => {
  const userAuthenticated = useAppSelector(authenticated);
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + 'logo-147x24-050.svg'}
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
            {userAuthenticated ? <LogOutView /> : <LogInView />}
          </UserMenu>
        </Wrapper>
        <Navbar />
      </Container>
      <PageCategory>
        <p>그룹별 여행 {'>'} 5070</p>
      </PageCategory>
      <PageTitle>그룹별 여행</PageTitle>
      <div>
        <SubUl_first>
          <SubLi_first>
            <Link to="/subPage">5070끼리</Link>
          </SubLi_first>
          <SubLi_first>
            <Link to="/subPage">2040끼리</Link>
          </SubLi_first>
          <SubLi_first>
            <Link to="/subPage">남자끼리</Link>
          </SubLi_first>
          <SubLi_first>
            <Link to="/subPage">여자끼리</Link>
          </SubLi_first>
          <SubLi_first>
            <Link to="/subPage">자녀동반</Link>
          </SubLi_first>
          <SubLi_first>
            <Link to="/subPage">누구든지</Link>
          </SubLi_first>
        </SubUl_first>
      </div>
      <ResultBar>
        <ResultValue>
          <p>총 37개의 5070 여행</p>
        </ResultValue>
        <SortBar>
          <Sort_New>
            <p>신상품순</p>
          </Sort_New>
          <Sort_High>
            <p>높은 가격순</p>
          </Sort_High>
          <Sort_Low>
            <p>낮은 가격순</p>
          </Sort_Low>
        </SortBar>
      </ResultBar>
      <></>
      <Pagination />
      <Footer></Footer>
    </>
  );
};

const Container = styled.div`
  z-index: 999;
  background: #4286f4;
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
  color: #fff;
`;

const InputBox = styled.div`
  width: 326px;
  height: 48px;
  background-color: #f5f5f5;
  opacity: 0.1;
  display: flex;
  align-items: center;
  margin: 12px;
  padding: 12px;

  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 8px;
    color: #fff;
  }

  input {
    width: 220px;
    height: 24px;
    padding: 12px 0;
  }

  placeholder {
    color: #fff;
  }
`;

const UserMenu = styled.div`
  margin-left: auto;
  width: 22rem;
  display: flex;
  justify-content: space-between;
`;

const PageCategory = styled.div`
  max-width: ${LAYOUT.SIZE.WIDTH};
  height: 24px;
  margin: 0 auto;
  margin-top: 20px;

  p {
    color: #666666;
  }
`;

const PageTitle = styled.h1`
  max-width: ${LAYOUT.SIZE.WIDTH};
  height: 32px;
  margin: 0 auto;
  font-size: 32px;
  margin-top: 24px;
`;

const SubUl_first = styled.ul`
  max-width: ${LAYOUT.SIZE.WIDTH};
  margin: 0 auto;
  height: 100%;
  display: flex;
  padding: 20px 0;
  gap: 5rem;
  margin-top: 24px;
`;

const SubLi_first = styled.li`
  font-weight: 600;
  color: #222222;

  &:hover a {
    border-bottom: 2px solid #000000;
    font-weight: bolder;
    padding-bottom: 4px;
    color: #000000;
    width: 50%;
  }
`;

const ResultBar = styled.div`
  max-width: ${LAYOUT.SIZE.WIDTH};
  height: 24px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ResultValue = styled.div`
  width: 139px;
`;

const SortBar = styled.div`
  width: 276px;
  display: flex;
  gap: 16px;
`;

const Sort_New = styled.div`
  width: 56px;
`;

const Sort_High = styled.div`
  width: 76px;
`;

const Sort_Low = styled.div`
  width: 88px;
`;

export default Subpage;
