import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HelloBox = () => {
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://13.125.151.45:8080/api/my/user/40`,
      headers: {
        AccessToken:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaW0xMjg2QGtha2FvLmNvbSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjY1NjY3NTQ3fQ.E5F1MXJfI41unAheekM5eGv4QtRoGDz6zBUtC4mQPBE',
      },
    }).then((res) => {
      console.log(res);
      setDatas(res.data.data);
    });
  }, []);
  console.log(datas);
  return (
    <UserImg>
      <img
        src="https://www.gotogether-s.com/common/img/default_profile.png"
        alt=""
        style={{ width: 100 }}
      />
      <div>
        <h3>{datas.userInfo.name} 님 안녕하세요 ˙ᵕ˙</h3>
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
