import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ProductList } from '../../components/admin/Admin_Main_ProductList';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {
  clickId,
  clickedIds,
  unclickId,
} from '../../features/adminPage/adminPageSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getProductData } from '../../components/common/Product_Type';

export default function Admin_Main() {
  const [datas, setDatas] = useState<getProductData[]>([]);
  const [value, setValue] = useState<number>(6.1);
  const [page, setPage] = useState<number>(1);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const clicks = useAppSelector(clickedIds);

  const pageNumber: number = Math.floor(datas.length / value) + 1;
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://13.125.151.45:8080/api/package/admin/list?title=all',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjAwMDBAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxOTgxMzcwMTAyfQ.85ucBpU6BU7KbXYOOAl1-GdBYTn117SVu5rtTiUQPts',
      },
    }).then((res) => setDatas(res.data.data));
  }, [clicks]);

  const searchBox = () => {
    if (keyword === '') {
      axios({
        method: 'get',
        url: 'http://13.125.151.45:8080/api/package/admin/list?title=all',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjAwMDBAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxOTgxMzcwMTAyfQ.85ucBpU6BU7KbXYOOAl1-GdBYTn117SVu5rtTiUQPts',
        },
      }).then((res) => {
        setDatas(res.data.data);
      });
    } else {
      axios({
        method: 'get',
        url: `http://13.125.151.45:8080/api/package/admin/list?title=${keyword}`,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjAwMDBAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxOTgxMzcwMTAyfQ.85ucBpU6BU7KbXYOOAl1-GdBYTn117SVu5rtTiUQPts',
        },
      }).then((res) => {
        setDatas(res.data.data);
      });
    }
  };

  const deleteBtn = () => {
    clicks.map((id) => {
      axios({
        method: 'post',
        url: `http://13.125.151.45:8080/api/package/admin/delete/${id}`,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjAwMDBAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxOTgxMzcwMTAyfQ.85ucBpU6BU7KbXYOOAl1-GdBYTn117SVu5rtTiUQPts',
        },
      })
        .then((response) => {
          console.log({ response });
          dispatch(unclickId(id));
        })
        .catch((error) => {
          console.log({ error });
        });
    });
  };

  const checkAll = () => {
    if (isClicked) {
      datas
        .slice((page - 1) * value, page * value)
        .map((data: getProductData) => {
          dispatch(unclickId(data.id));
        });
      setIsChecked(false);
      setIsClicked(false);
    } else {
      datas
        .slice((page - 1) * value, page * value)
        .map((data: getProductData) => {
          dispatch(clickId(data.id));
        });
      setIsChecked(true);
      setIsClicked(true);
    }
  };

  return (
    <Wrap>
      <Header>
        <img src={process.env.PUBLIC_URL + '/icons/logo-admin.png'} />
      </Header>
      <Nav>
        <Nav_Bottom
          onClick={() => {
            navigate('/');
          }}
        >
          사이트 바로가기
        </Nav_Bottom>
      </Nav>
      <Main>
        <Main_Wrap>
          <Main_Add_Btn
            onClick={() => {
              navigate('/admin/product');
            }}
          >
            <p>상품 추가하기</p>
          </Main_Add_Btn>
          <Main_Delete_Btn
            onClick={() => {
              deleteBtn();
            }}
          >
            <p>삭제</p>
          </Main_Delete_Btn>
          <Main_List_Number
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          >
            <option value="4.1">4개</option>
            <option value="6.1">6개</option>
          </Main_List_Number>
          <Main_Search
            placeholder="검색"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                searchBox();
              }
            }}
          ></Main_Search>
          <Main_Board>
            <Main_List>
              <Main_List_Category>
                <input
                  type="checkbox"
                  onClick={checkAll}
                  checked={isChecked}
                  readOnly
                ></input>
                <Title>상품명</Title>
                <Summary>요약</Summary>
                <Price>판매가</Price>
                <SearchKeyword>키워드</SearchKeyword>
                <Status>상태</Status>
              </Main_List_Category>
              {datas
                .slice((page - 1) * value, page * value)
                .map((data: getProductData) => (
                  <ProductList key={data.id} data={data} />
                ))}
            </Main_List>
            <Main_Page_Number>
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
              </button>
              {new Array(pageNumber).fill(null).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => {
                    setPage(i + 1);
                    setIsChecked(false);
                    setIsClicked(false);
                  }}
                  aria-current={page === i + 1 && 'page'}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pageNumber}
              >
                &gt;
              </button>
            </Main_Page_Number>
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
  overflow-x: hidden;
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
const Nav_Bottom = styled.button`
  width: 100%;
  height: 10%;
  align-self: flex-end;
  background: #666666;
  display: flex;
  color: white;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  &:hover {
    background: black;
  }
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

  -family: 'Noto Sans KR', sans-serif;
  -size: 1rem;
  -weight: 400;
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
    -family: 'Pretendard';
    -style: normal;
    -weight: 500;
    -size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;
const Main_Delete_Btn = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #4286f4;

  margin: 0;
  padding: 0.5rem 1rem;

  -family: 'Noto Sans KR', sans-serif;
  -size: 1rem;
  -weight: 400;
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
  right: 150px;
  top: 20px;

  &:active {
    background: skyblue;
    outline: 0;
  }
  &:disabled {
    opacity: 0.5;
  }
  p {
    -family: 'Pretendard';
    -style: normal;
    -weight: 500;
    -size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;
const Main_Board = styled.div`
  width: 100%;
`;
const Main_List = styled.div`
  width: 100%;
  padding: 110px 30px 0 30px;
`;
const Main_List_Category = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  input {
    width: 3%;
  }
  p {
    font-size: 13px;
    text-align: center;
  }
`;
const Title = styled.p`
  width: 12%;
`;
const Summary = styled.p`
  width: 55%;
`;
const Price = styled.p`
  width: 10%;
`;
const SearchKeyword = styled.p`
  width: 10%;
`;
const Status = styled.p`
  width: 15%;
`;
const Main_List_Number = styled.select`
  position: absolute;
  -family: 'Noto Sansf KR', sans-serif;
  -size: 13px;
  -weight: 400;
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
const Main_Search = styled.input`
  position: absolute;
  top: 60px;
  left: 130px;
  width: 240px;
  height: 35px;

  background: #f5f5f5;
`;
const Main_Page_Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  button {
    align-items: center;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue',
      Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    padding: 10px;
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: blue;
      font-size: 12px;
    }
    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      background-color: #f0f0f1;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
    &:disabled {
      display: none;
    }
  }
`;
