import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  // userDataName,
  // userDataImage,
  // userTotalPaymentAmount,
  userUserInfo,
} from '../../features/userData/userDataSlice';

const HelloBox = () => {
  // const userName = useAppSelector(userDataName);
  // const userImage = useAppSelector(userDataImage);
  // const totalPaymentAmount = useAppSelector(userTotalPaymentAmount);
  const userInfo = useAppSelector<any>(userUserInfo);
  const userImg: any = userInfo.profileImage;
  console.log(userInfo.profileImage);
  return (
    <UserImg>
      {userImg !== undefined ? (
        <img
          src={
            userImg.includes('null')
              ? process.env.PUBLIC_URL + '/icons/ic-member.svg'
              : userImg
          }
          alt=""
          style={{ width: 100 }}
        />
      ) : null}

      <div>
        <h3>{userInfo.name} 님 안녕하세요 ˙ᵕ˙</h3>
        <p>누적 결제금액 : {userInfo.totalPaymentAmount}원</p>
      </div>
    </UserImg>
  );
};
const UserImg = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  > img {
    margin: 0 20px 0 0;
  }
  > div > h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 0 10px 0;
  }
`;
export default HelloBox;
