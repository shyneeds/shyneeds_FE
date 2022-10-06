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

  console.log(datas);

  return (
    <Wrap>
      <Header>
        <img src={process.env.PUBLIC_URL + '/icons/logo-admin.png'} />
      </Header>
      <Nav>
        <Nav_Bottom></Nav_Bottom>
      </Nav>
      <Main>
        <Main_Wrap>
          <Main_Add_Btn
          // onClick={addProduct}
          >
            <p>상품 추가하기</p>
          </Main_Add_Btn>
          <Main_Board>
            <Main_List>
              {datas.map((data: any) => (
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
  // left: 310px;
  // top: 112px;
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
  border-radius: 8px;
  right: 30px;
  margin: 20px 0 0 20px;
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
  background-color: red;
  width: 800px;
  height: auto;
  margin: 100px 520px 0 120px;
`;
