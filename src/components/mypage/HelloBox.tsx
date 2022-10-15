import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { userDataName } from '../../features/userData/userDataSlice';

const HelloBox = () => {
  const userName = useAppSelector(userDataName);

  return (
    <UserImg>
      {/* <img
        src={
          datas.userInfo.profileImage.includes('null')
            ? process.env.PUBLIC_URL + '/icons/ic-member.svg'
            : datas.userInfo.profileImage
        }
        alt=""
        style={{ width: 100 }}
      /> */}
      <div>
        <h3>{userName} 님 안녕하세요 ˙ᵕ˙</h3>
        <p>누적 결제금액 : 원</p>
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
