
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
import {
  // name,
  // profileImage,
  reservationList,
  // totalPaymentAmount,
  userInfo,
} from '../../features/userData/userDataSlice';
import PasswordPop from './PasswordPop';

const MypageTab = () => {
  const [tab, setTab] = useState<number>(1);
  const [popup, setPopup] = useState<boolean>(false);
  const [passPopup, setPassPopup] = useState<boolean>(false);
  const tabReset = () => {
    setTab(1);
  };
  const togglePop = () => {
    setPopup(!popup);
  };
  const PassTogglePop = () => {
    setPassPopup(!passPopup);
  };
  const token = useAppSelector(userToken);
  const userIdValue = useAppSelector(userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/my/user`,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      dispatch(userInfo(res.data.data.userInfo));
      // dispatch(name(res.data.data.userInfo.name));
      // dispatch(profileImage(res.data.data.userInfo.profileImage));
      dispatch(reservationList(res.data.data.reservationList));
      // dispatch(totalPaymentAmount(res.data.data.userInfo.totalPaymentAmount));
    });
  }, []);
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
              onClick={() => setPopup(true)}
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
              {/* 1. 취소를 클릭하면 tab이라는 게 바뀐다.
              2. 트루값을 가지고 있는애면 예약조회 : 면 예약취소 사이트 */}
              {tab === 1 && <Reservation />}
              {tab === 2 && <Writing />}
              {/* {tab === 3 && <Modify />} */}
              {tab === 3 && passPopup === false ? (
                <PasswordPop
                  PassTogglePop={PassTogglePop}
                  tabReset={tabReset}
                />
              ) : null}
              {tab === 3 && passPopup === true ? <Modify /> : null}
              {/* {tab === 4 && <Withdrawal />} */}
              {/* {popup === true && <Withdrawal (props:propsType)setPopup={setPopup}/>} */}
              {popup === true && <Withdrawal togglePop={togglePop} />}
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
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
`;

const ContentsResult = styled.div`
  > div > h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default MypageTab;
