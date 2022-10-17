import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Reservation from './Reservation';
import Writing from './Writing';
import Modify from './Modify';
import Withdrawal from './Withdrawal';
import HelloBox from './HelloBox';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userToken, userId } from '../../features/kakaoLogin/kakaoLoginSlice';
import { email, name } from '../../features/userData/userDataSlice';

const Mypage = () => {
  const [tab, setTab] = useState<number>(1);
  // const [datas, setDatas] = useState<any>([]);
  // const [booking, setBooking] = useState<any>([]);

  const token = useAppSelector(userToken);
  const userIdValue = useAppSelector(userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/my/user/${userIdValue}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data.data.userInfo.name);
      // setDatas(res.data.data);
      // dispatch(email(datas.userInfo.email));

      dispatch(name(res.data.data.userInfo.name));
    });
  }, []);
  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `http://13.125.151.45:8080/api/reservation/user/${userIdValue}`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //     setBooking(res);
  //     // dispatch(email(datas.userInfo.email));
  //     // dispatch(name(datas.userInfo.name));
  //   });
  // }, []);
  // console.log(booking);

  return (
    <div>
      <MypageMain>
        <h2>나의 여행</h2>
        <Contents>
          <ContentsList>
            <p
              className={tab === 1 ? 'active' : undefined}
              onClick={() => setTab(1)}
            >
              예약조회
            </p>
            <p
              className={tab === 2 ? 'active' : undefined}
              onClick={() => setTab(2)}
            >
              내가 작성한 글
            </p>
            <p
              className={tab === 3 ? 'active' : undefined}
              onClick={() => setTab(3)}
            >
              회원정보수정
            </p>
            <p
              className={tab === 4 ? 'active' : undefined}
              onClick={() => setTab(4)}
            >
              회원탈퇴
            </p>
          </ContentsList>
          <ContentsMain>
            {tab === 1 || tab === 2 ? (
              <UserInfo>
                <HelloBox />
              </UserInfo>
            ) : null}
            <ContentsResult>
              {tab === 1 && <Reservation />}
              {tab === 2 && <Writing />}
              {tab === 3 && <Modify />}
              {tab === 4 && <Withdrawal />}
            </ContentsResult>
          </ContentsMain>
        </Contents>
      </MypageMain>
    </div>
  );
};

const MypageMain = styled.div`
  width: 1184px;
  margin: 30px auto;
  > h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
const Contents = styled.div`
  width: 1184px;
  margin: 25px auto;
  &:after {
    content: '';
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
  > .active {
    position: relative;
    background-color: #f5f6f8;
    font-weight: bold;
  }
  > .active:before {
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
  margin: 0 0 70px;
  padding: 50px 0 50px 40px;
  border: 1px solid #e9ecef;
`;

const ContentsResult = styled.div`
  > div > h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default Mypage;
