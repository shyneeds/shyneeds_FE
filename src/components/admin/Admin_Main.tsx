import React from 'react'
import styled from 'styled-components'

interface Data {
	"title": string,
	"categoryIds": number[],
	"subCategoryIds": number[],
	"thirdCategoryIds": number[],
	"price": string,
	"summary": string,
	"requiredOptionName": string,
	"requiredOptionalValues": string
	"optionalName": string,
	"optionalValues": string,
	"flightInfo": string,
	"soldoutFlg": boolean,
	"dispFlg": boolean,
	"searchKeyword": string,
}

const tempData:Data =
{
	"title": "그리스",
	"categoryIds": [1,2,3],
	"subCategoryIds": [4,7,13,15],
	"thirdCategoryIds": [14],
	"price": "1,000,000",
	"summary": "9월 대한항공 전세기 직항 이용\n 산토리니 특급 2박, 특급호텔 총 7박\n 모든 것이 포함된 풀패키지 여행",
	"requiredOptionName": "출발일",
	"requiredOptionalValues": "2022.12.02(금)출발~2022.12.29(목)도착",
	"optionalName": "싱글차지",
	"optionalValues": "1인 싱글룸 사용시 추가",
	"flightInfo": "대한항공 전세기 직항",
	"soldoutFlg": false,
	"dispFlg": true,
	"searchKeyword": "여자끼리"
}

// const addProduct = () => {

// }


export default function Admin_Main() {
  return (
    <Wrap>
      <Header>
        <img src= {process.env.PUBLIC_URL + '/icons/logo-admin.png'}/>
      </Header>
      <Nav>
        <Nav_Bottom>

        </Nav_Bottom>
      </Nav>
      <Main>
        <Main_Wrap>
          <Main_Add_Btn
            // onClick={addProduct}
          >
            <p>상품 추가하기</p>
          </Main_Add_Btn>
        </Main_Wrap>
      </Main>
    </Wrap>
  )
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
`
const Header = styled.div`
  grid-area: header;
  background: black;
  display: flex;
  align-items: center;
  img{
    margin: 10px 0px 10px 30px;
    width: 251px;
    height: 28px
  }
`
const Nav = styled.div`
  grid-area: side;
  background: #FFFFFF;
  display: flex;
`
const Nav_Bottom = styled.div`
  width: 100%;
  height: 10%;
  align-self: flex-end;
  background: #666666;
`

const Main = styled.div`
  grid-area: main;
  background: rgb(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main_Wrap = styled.div`
  width: 97%;
  height: 95%;
  // left: 310px;
  // top: 112px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  position: relative;
`
const Main_Add_Btn = styled.button`
  position: absolute;
  width: 127px;
  height: 40px;
  background: #4286F4;
  border-radius: 8px;
  left: 990px;
  margin: 20px 0 0 20px;
  p{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
`
