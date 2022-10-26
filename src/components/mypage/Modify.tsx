import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  // userDataName,
  // userDataImage,
  // userDataGender,
  userUserInfo,
} from '../../features/userData/userDataSlice';
import { userToken } from '../../features/kakaoLogin/kakaoLoginSlice';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';

const Modify = () => {
  const formData = new FormData();
  const now = new Date();
  const year = now.getFullYear();
  const navigate = useNavigate();
  const token = useAppSelector<any>(userToken);
  console.log(token);
  const [selectedDate, setSelectedDate] = useState({
    year: (year + '') as any,
    month: '01' as any,
    day: '01',
  });
  const [myImage, setMyImage] = useState<string>();
  const [tab, setTab] = useState<number>();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const copyProfileImage = data.profileImage;
    delete data.password_repeat;
    delete data.profileImage;
    console.log(copyProfileImage);
    console.log(data);
    formData.append('userInfo', data);
    formData.append('profileImage', copyProfileImage);
    axios({
      method: 'PATCH',
      url: `http://13.125.151.45:8080/api/user`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        // 'Content-type': 'application/json',
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((errors) => {
        console.log(errors);
      });

    alert('회원정보 수정이 완료되었습니다.');
  };

  const { ref, ...rest } = register('profileImage');
  const uploadImage = (e: any) => {
    setMyImage(URL.createObjectURL(e.target.files[0]));
    setValue('profileImage', e.target.files[0]);
  };
  const imgRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  // const userName = useAppSelector(userDataName);
  // const userImage = useAppSelector(userDataImage);
  // const userGender = useAppSelector(userDataGender);
  const userInfo = useAppSelector<any>(userUserInfo);
  const userImg: any = userInfo.profileImage;

  // const modify = () => {};

  // useEffect(() => {
  //   //only use for Test
  //   // console.log(selectedDate);
  //   // console.log(passwordRef.current?.value);
  // }, [selectedDate]);
  useEffect(() => {
    if (userInfo.gender === 'male') {
      setTab(0);
    }
  }, []);
  const isPhoneNum = () => {
    if (watch('phoneNumber').length === 13) {
      setValue(
        'phoneNumber',
        watch('phoneNumber').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      );
    }
    if (watch('phoneNumber') >= 13) {
      setValue(
        'phoneNumber',
        watch('phoneNumber')
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  };
  const isError = () => {
    Object.keys(errors).length === 0 && alert('회원가입이 완료되었습니다.'),
      navigate(-1);
  };
  return (
    <div>
      <h2>회원정보수정</h2>
      <WrapContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputImgBox>
            <ImgButton
              src={
                userImg.includes('null')
                  ? process.env.PUBLIC_URL + '/icons/ic-member.svg'
                  : userImg
              }
              onClick={() => imgRef.current?.click()}
            />

            <input
              style={{ display: 'none' }}
              ref={imgRef}
              onChange={uploadImage}
              type="file"
              accept="image/*"
            />
          </InputImgBox>

          <InputBox>
            <NameStyle>새로운 비밀번호</NameStyle>
            <InputStyle
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                onChange: () => isPhoneNum(),
                required: true,
                pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
              })}
            />
            {errors.password && (
              <ErrorMessage>
                비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야
                합니다.
              </ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <NameStyle>비밀번호 확인</NameStyle>
            <InputStyle
              type="password"
              placeholder="비밀번호 확인"
              style={{
                outline: errors.password_repeat ? '2px solid red' : '',
              }}
              {...register('password_repeat', {
                validate: (value: string) => getValues('password') === value,
              })}
            />
            {errors.password_repeat && (
              <ErrorMessage>비밀번호를 확인해 주세요.</ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <NameStyle>이름</NameStyle>
            <InputStyle
              defaultValue={userInfo.name}
              placeholder="이름"
              style={{ outline: errors.name ? '2px solid red' : '' }}
              {...register('name', {
                required: true,
                minLength: 2,
                valueAsNumber: false,
              })}
            />
            {errors.name && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
          </InputBox>
          <InputBox>
            <NameStyle>연락처</NameStyle>
            <InputStyle
              placeholder="연락처를 적어주세요"
              style={{ outline: errors.phoneNumber ? '2px solid red' : '' }}
              {...register('phoneNumber', {
                required: true,
                pattern: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
                onChange: () => isPhoneNum(),
              })}
            />
            {errors.phoneNumber && (
              <ErrorMessage>번호를 입력해주세요.</ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <NameStyle>생년월일</NameStyle>
            <BirthdayBox>
              <BirthSelect
                defaultValue={userInfo.birthday.substr(0, 4)}
                {...register('year', { required: true })}
                onChange={(e) =>
                  setSelectedDate({ ...selectedDate, year: e.target.value })
                }
              >
                {Array.from(new Array(80), (v, i) => (
                  <option key={i} value={year - i}>
                    {year - i}
                  </option>
                ))}
              </BirthSelect>
              <BirthSelect
                defaultValue={userInfo.birthday.substr(5, 7)}
                {...register('month', { required: true })}
                onChange={(e) =>
                  setSelectedDate({ ...selectedDate, month: e.target.value })
                }
              >
                {Array.from(new Array(12), (v, i) => (
                  <option key={i} value={1 + i}>
                    {1 + i}
                  </option>
                ))}
              </BirthSelect>
              <BirthSelect
                defaultValue={userInfo.birthday.substr(8, 10)}
                {...register('day', { required: true })}
                onChange={(e) =>
                  setSelectedDate({ ...selectedDate, day: e.target.value })
                }
              >
                {Array.from(
                  new Array(
                    new Date(selectedDate.year, selectedDate.month, 0).getDate()
                  ),
                  (v, i) => (
                    <option key={i} value={1 + i}>
                      {1 + i}
                    </option>
                  )
                )}
              </BirthSelect>
            </BirthdayBox>
          </InputBox>
          <InputBox>
            <NameStyle>성별</NameStyle>
            <GednerBox>
              <GenderButton
                onClick={(e) => {
                  e.preventDefault();
                  setTab(0), setValue('gender', 'male');
                }}
                className={tab === 0 ? 'active' : undefined}
              >
                남성
              </GenderButton>
              <GenderButton
                onClick={(e) => {
                  e.preventDefault();
                  setTab(1), setValue('gender', 'female');
                }}
                className={tab === 1 ? 'active' : undefined}
              >
                여성
              </GenderButton>
            </GednerBox>
          </InputBox>
          {Object.keys(errors).length !== 0 ? (
            <SubmitFailedButton>수정하기</SubmitFailedButton>
          ) : (
            <SubmitButton type={'submit'}>수정하기</SubmitButton>
          )}
        </Form>
      </WrapContainer>
    </div>
  );
};

const InputImgBox = styled.div`
  margin-bottom: 34px;
`;

const WrapContainer = styled.div`
  width: 600px;
  align-items: center;
  margin-top: 50px;
`;

const InputBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const BirthdayBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const GednerBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form``;

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
const NameStyle = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  padding-bottom: 6px;
  color: #666666;
`;

const BirthSelect = styled.select`
  align-items: center;
  padding: 11px 20px;
  width: 190px;
  height: 50px;
  border: 1px solid #cccccc;
`;
const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ea4335;
  margin-top: -10px;
  padding-bottom: 20px;
`;
const GenderButton = styled.button`
  height: 50px;
  width: 294px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &.active {
    background-color: #4286f4;
    color: white;
  }
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const SubmitButton = styled.button`
  width: 600px;
  height: 56px;
  background-color: #4286f4;
  color: white;
  margin-top: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 56px;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const SubmitFailedButton = styled.button`
  width: 600px;
  height: 56px;
  background-color: gray;
  color: white;
  margin-top: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 56px;
  border-radius: 8px;
  opacity: 0.2;
  pointer-events: none;
`;

const ImgButton = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export default Modify;
