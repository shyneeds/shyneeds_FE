import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import styled from 'styled-components';

const Mypage = () => {
    return (
        <div>
            <Header />
            <MypageMain>
                <h2>나의 여행</h2>
                <Contents>
                    <ContentsList>
                        <p>회원정보수정</p>
                        <p>큐레이션결과 (?)</p>
                        <p>주문조회</p>
                        <p>내가 작성한 글</p>
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
                    </ContentsMain>
                </Contents>
            </MypageMain>
            <Footer />
        </div>
    );
};

const MypageMain = styled.div`
  width: 1184px;
  margin: 30px auto;
  > h2{
    font-size: 2rem;
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
  }
`;
const ContentsMain = styled.div`
  width: 70%;
  float: right;
  border: 1px solid #e9ecef;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
`;
const UserImg = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  padding: 50px 35px;
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

export default Mypage;