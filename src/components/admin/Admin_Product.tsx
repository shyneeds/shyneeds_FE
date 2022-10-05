import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface Data {
  registerInfo: {
    title: string;
    categoryIds: number[];
    subCategoryIds: number[];
    thirdCategoryIds: number[];
    price: string;
    summary: string;
    requiredOptionName: string;
    requiredOptionalValues: string;
    optionalName: string;
    optionalValues: string;
    flightInfo: string;
    soldoutFlg: boolean;
    dispFlg: boolean;
    searchKeyword: string;
  };
}

const formData: Data = {
  registerInfo: {
    title: '그리스',
    categoryIds: [1, 2, 3],
    subCategoryIds: [4, 7, 13, 15],
    thirdCategoryIds: [14],
    price: '1,000,000',
    summary:
      '9월 대한항공 전세기 직항 이용\n 산토리니 특급 2박, 특급호텔 총 7박\n 모든 것이 포함된 풀패키지 여행',
    requiredOptionName: '출발일',
    requiredOptionalValues: '2022.12.02(금)출발~2022.12.29(목)도착',
    optionalName: '싱글차지',
    optionalValues: '1인 싱글룸 사용시 추가',
    flightInfo: '대한항공 전세기 직항',
    soldoutFlg: false,
    dispFlg: true,
    searchKeyword: '여자끼리',
  },
};

export default function Admin_Product() {
  const [value, setValue] = useState<Data>();

  const onSubmit = (e: any) => {
    e.preventDefault();

    axios({
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
      url: 'http://13.125.151.45:8080/api/package/admin/register',
      method: 'post',
      data: formData,
    })
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <Wrap>
      <Header>
        <img src={process.env.PUBLIC_URL + '/icons/logo-admin.png'} />
      </Header>
      <Main>
        <form
          onSubmit={onSubmit}
          method="post"
          encType="multipart/form-data"
          action="http://13.125.151.45:8080/api/package/admin/register"
        >
          <input type="file" id="upload-file"></input>
          <input type="text" onChange={}></input>
          <input type="file" id="upload-file2"></input>
          <button>저장</button>
        </form>
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
const Main = styled.div``;
