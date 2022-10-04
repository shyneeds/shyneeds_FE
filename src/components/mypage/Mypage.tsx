import React, {useState} from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import styled from 'styled-components';

const Mypage = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <Header />
      <MypageMain>
        <h2>나의 여행</h2>
        <Contents>
          <ContentsList>
            <p className={ tab === 1? 'active' : undefined } onClick={()=>setTab(1)}>예약조회</p>
            <p className={ tab === 2? 'active' : undefined } onClick={()=>setTab(2)}>위시리스트</p>
            <p className={ tab === 3? 'active' : undefined } onClick={()=>setTab(3)}>큐레이션결과 (?)</p>
            <p className={ tab === 4? 'active' : undefined } onClick={()=>setTab(4)}>내가 작성한 글</p>
            <p>회원정보수정</p>
            <p>회원탈퇴</p>
          </ContentsList>
          <ContentsMain>
            <UserInfo>
              <UserImg>
                <img src= 'https://www.gotogether-s.com/common/img/default_profile.png' alt='' style={{width:100}}/>
                <div>
                  <h3>님 안녕하세요 ˙ᵕ˙</h3>
                  <p>누적 결제금액 : 원</p>
                </div>
              </UserImg>
              <UserPoint>
                <p>포인트</p>
                <span>0</span>
              </UserPoint>
            </UserInfo>
            <ContentsResult>
            {
              tab === 1 &&
              <Reservation />
            }
            {   
              tab === 2 &&
              <WishList />
            }
            {   
              tab === 3 &&
              <Curation />
            }
            {   
              tab === 4 &&
              <Writing />
            }
            </ContentsResult>
              
          </ContentsMain>
        </Contents>
      </MypageMain>
      <Footer />
    </div>
  );
};

function Reservation () {
  return (
    <>
      <h2>예약조회</h2>
      <div>예약내역이 없습니다.</div>
    </>
  )
}
function WishList () {
  return (
    <>
      <h2>위시리스트</h2>
      <div>위시리스트가 없습니다.</div>
    </>
  )
}
function Curation () {
  return (
    <>
      <h2>큐레이션결과</h2>
      <div>큐레이션결과가 없습니다.</div>
    </>
  )
}
function Writing  () {
  return (
    <>
      <h2>내가 작성한 글</h2>
      <div>내가 작성한 글이 없습니다.</div>
    </>
  )
}
const MypageMain = styled.div`
  width: 1184px;
  margin: 30px auto;
  > h2{
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
const Contents = styled.div`
  width: 1184px;
  margin: 25px auto;
  &:after{
    content:'';
    display: block;
    clear: both;
  }
`;
const ContentsList = styled.div`
  width: 20%;
  float: left;
  border: 1px solid #e9ecef;
  border-bottom: 0;
  > p {
    padding: 18px;
    border-bottom: 1px solid #e9ecef;
    cursor: pointer;
  }
  > .active{
    position: relative;
    background-color: #f5f6f8;
    font-weight: bold;
  }
  > .active:before{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #0081c7;
  }
`;
const ContentsMain = styled.div`
  width: 70%;
  float: right;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  padding: 50px 0 50px 40px;
  border: 1px solid #e9ecef;
`;
const UserImg = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  
  > img{
    margin: 0 20px 0 0;
  }
  > div > h3{
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 0 10px 0;
  }
`;
const UserPoint = styled.div`
  position: relative;
  text-align: center;
  width: 30%;
  > p{
    margin: 0 0 10px 0;
  }
  > span{
    font-size: 2.5rem;
  }
  > p, >span{
      font-weight: bold;
  }
  &:before{
      content: "";
      display: block;
      width: 1px;
      height: 100px;
      position: absolute;
      background: rgb(229, 229, 229);
      left: 0px;
      top: 50%;
      margin-top: -50px;
  }
`;
const ContentsResult = styled.div`
  padding: 70px 0;
  > h2{
    font-size: 1.4rem;
    font-weight: bold;
  }
  > div{
    padding: 100px;
    text-align: center;
  }
`;
export default Mypage;