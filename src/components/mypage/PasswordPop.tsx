import React from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../constants/API_URL';
import styled from 'styled-components';
import axios from 'axios';
import { userLogin } from '../../features/kakaoLogin/kakaoLoginSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userUserInfo } from '../../features/userData/userDataSlice';
import { useNavigate } from 'react-router';
import Modify from './Modify';
import Reservation from './Reservation';

interface Prop {
  PassTogglePop: () => void;
  tabReset: () => void;
}

const PasswordPop = ({ PassTogglePop, tabReset }: Prop): JSX.Element | any => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector<any>(userUserInfo);
  // console.log(userInfo);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: any, test: any) => {
    console.log(formData);
    console.log(test);
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      url: API_URL.POST.LOGIN,
      method: 'post',
      data: formData,
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.statusCode);
        if (response.data.statusCode === 200) {
          PassTogglePop();
          // <Modify />;
        }
        // console.log({ response.data.data.statusCode });
        // setCookie('accessToken',response.data.data.accessToken)
        // navigate('/');
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <PopupBox>
      <BackGround onClick={() => tabReset()} />
      <Popup>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title>비밀번호 확인</Title>
          <InputBox>
            <InputStyle
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: true,
              })}
            />
            {/* {errors.password && (
            <ErrorMessage>
              비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야
              합니다.
            </ErrorMessage>
          )} */}
          </InputBox>
          <BtnBox>
            <Btn onClick={() => setValue('email', userInfo.email)}>확인</Btn>
          </BtnBox>
          {}
        </form>
      </Popup>
    </PopupBox>
  );
};
const PopupBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 352px;
  padding: 60px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #000;
`;
const Info = styled.p`
  margin: 28px 0;
  font-size: 1.1rem;
  color: #333;
  line-height: 28px;
  text-align: left;
`;
const BtnBox = styled.div``;
const Btn = styled.button`
  margin: 15px 0 0;
  padding: 11px 26px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.1rem;
  color: #666;
  cursor: pointer;
`;

const InputBox = styled.div`
  width: 100%;
  margin: 50px auto 0;
`;
const InputStyle = styled.input`
  height: 50px;
  width: 100%;
  font-size: 16px;
  font-weight: 500px;
  border-radius: 8px;
  padding-left: 20px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  &:focus {
    outline: 2px solid #34a853;
  }
`;

export default PasswordPop;
