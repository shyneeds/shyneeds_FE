import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Admin_ProductList from './Admin_ProductList';

export default function Admin_Main() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get('http://13.125.151.45:8080/api/package/admin')
      .then((res) => setDatas(res.data.data));
  }, []);

  // console.log(datas);

  const addProduct = () => {
    console.log('test');
  };

  return (
    <Wrap>
      <Header>
        <img src={process.env.PUBLIC_URL + '/icons/logo-admin.png'} />
      </Header>
      <Nav>
        <Nav_Bottom>사이트 바로가기</Nav_Bottom>
      </Nav>
      <Main>
        <Main_Wrap>
          <Main_Add_Btn onClick={addProduct}>
            <p>상품 추가하기</p>
          </Main_Add_Btn>
          <Main_List_Number>
            <option value="5개">5개</option>
            <option value="10개">10개</option>
          </Main_List_Number>
          <Main_Board>
            <Main_List>
              <Main_List_Category>
                <input type="checkbox"></input>
                <p>상품명</p>
                <p>요약</p>
                <p>가격</p>
                <p>카테고리</p>
              </Main_List_Category>
              {datas.map((data: any, i) => (
                <Admin_ProductList key={data.id} data={data} />
              ))}
            </Main_List>
          </Main_Board>
        </Main_Wrap>
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 80px auto;
  grid-template-areas:
    'header header'
    'side main';
`;
const Header = styled.div`
  grid-area: header;
  background: black;
  display: flex;
  align-items: center;
  img {
    margin: 10px 0px 10px 30px;
    width: 251px;
    height: 28px;
  }
`;
const Nav = styled.div`
  grid-area: side;
  background: #ffffff;
  display: flex;
`;
const Nav_Bottom = styled.div`
  width: 100%;
  height: 10%;
  align-self: flex-end;
  background: #666666;
`;
const Main = styled.div`
  grid-area: main;
  background: rgb(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main_Wrap = styled.div`
  width: 97%;
  height: 95%;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  position: relative;
`;
const Main_Add_Btn = styled.button`
  position: absolute;
  width: 127px;
  height: 40px;
  background: #4286f4;

  margin: 0;
  padding: 0.5rem 1rem;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  border: none;
  border-radius: 4px;

  display: inline-block;
  width: auto;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  cursor: pointer;

  transition: 0.5s;
  right: 30px;
  top: 20px;

  &:active {
    background: skyblue;
    outline: 0;
  }
  &:disabled {
    opacity: 0.5;
  }
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;
const Main_Board = styled.div``;
const Main_List = styled.div`
  margin: 110px 30px 0 30px;
`;
const Main_List_Category = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Main_List_Number = styled.select`
  position: absolute;
  font-family: 'Noto Sansf KR', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  width: 80px;
  height: 35px;
  top: 60px;
  left: 30px;

  color: #444;
  background-color: #fff;

  padding: 0.3em 0.7em 0.2em 0.4em;

  border: 1px solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 2px rgba(59, 153, 252, 0.7);
    color: #222;
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
