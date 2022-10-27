import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { LAYOUT } from '../../constants/layout';
import { authenticated } from '../../features/kakaoLogin/kakaoLoginSlice';
import { API_URL } from '../../constants/API_URL';
import Footer from '../common/footer/Footer';
import { Navbar } from '../common/header/Navbar';
import { LogInView, LogOutView } from '../common/header/UserMenu';
import Pagination from '../community/Pagination';
import { useDispatch } from 'react-redux';
import {
  CategoryProductData,
  getCategoryProduct,
} from '../../features/main/productSlice';

const Subpage = () => {
  // const [poruducts, setProducts] = useState<any>();
  const userAuthenticated = useAppSelector(authenticated);
  const categoryProduct = useAppSelector<any>(CategoryProductData);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      url: API_URL.GET.SUB_CATEGORY,
      method: 'get',
    })
      .then((response) => {
        console.log({ response });
        dispatch(getCategoryProduct(response.data.data));
        // setProducts(res);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

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
      <MiddleWrap>
        <MiddleInner>
          <PageCategory>
            그룹별 여행 &nbsp;&nbsp;&gt;&nbsp;&nbsp; 5070
          </PageCategory>
          <TitleTab>
            <PageTitle>그룹별 여행</PageTitle>
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
          </TitleTab>
        </MiddleInner>
      </MiddleWrap>
      <ResultWrap>
        <ResultBar>
          <ResultValue>총 37개의 5070 여행</ResultValue>
          <SortBar>
            <Sort>신상품순</Sort>
            <Sort>높은 가격순</Sort>
            <Sort>낮은 가격순</Sort>
          </SortBar>
        </ResultBar>

        <ProductWrap>
          {categoryProduct.map((data: any) => {
            return (
              <Product key={data.travelPackageId}>
                <img src={data.mainImage} alt="" />
              </Product>
            );
          })}
        </ProductWrap>
      </ResultWrap>
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

const MiddleWrap = styled.p`
  width: 100%;
  border-bottom: 1px solid #eee;
`;
const MiddleInner = styled.p`
  width: 1184px;
  margin: 0 auto;
`;
const PageCategory = styled.p`
  padding: 24px 0;
  color: #666666;
`;

const TitleTab = styled.div``;
const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const SubUl_first = styled.ul`
  margin-top: 24px;
  text-align: left;
`;

const SubLi_first = styled.li`
  display: inline-block;
  height: 64px;
  line-height: 64px;
  margin: 0 40px 0 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  letter-spacing: 1px;

  &:hover {
    border-bottom: 3px solid #4286f4;
    font-weight: bold;
    color: #4286f4;
  }
`;

const ResultWrap = styled.div`
  width: 1184px;
  margin: 0 auto;
`;
const ResultBar = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ResultValue = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
`;

const SortBar = styled.div`
  display: flex;
  gap: 24px;
`;

const Sort = styled.p`
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  color: #aaa;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    left: -8px;
    width: 4px;
    height: 4px;
    margin: -1px 5px 0 0;
    background-color: #cccccc;
    border-radius: 50%;
    vertical-align: middle;
  }
`;
const ProductWrap = styled.div``;
const Product = styled.div`
  display: inline-block;
  width: 284px;
  margin: 0 16px 0 0;
  :nth-child(4n) {
    margin-right: 0px;
  }
`;

export default Subpage;
``;
