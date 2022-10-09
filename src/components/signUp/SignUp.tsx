import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/API_URL';

const SignUp = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1 + '';
  const day = now.getDate() + '';
  const [selectedDate, setSelectedDate] = useState({
    year: (year + '') as any,
    month: (month + '') as any,
    day: (day + '') as any,
  });
  const [myImage, setMyImage] = useState<string>();
  const [tab, setTab] = useState<number>();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData: any) => {
    delete formData.password_repeat;
    console.log(formData);
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      url: API_URL.POST.SIGNUP,
      method: 'post',
      data: formData,
    })
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const uploadImage = (e: any) => {
    setMyImage(URL.createObjectURL(e.target.files[0]));
    // setValue('image', e.target.files[0]); 삭제 예정
  };
  const imgRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  return (
    <WrapContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* <InputImgBox>
          <ImgButton
            src={
              imgRef.current
                ? myImage
                : process.env.PUBLIC_URL + '/icons/ic-member.svg'
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
        </InputImgBox> */}
        <NameStyle>이메일</NameStyle>
        <InputBox>
          <InputStyle
            type="text"
            placeholder="이메일"
            style={{
              outline: errors.email ? '2px solid red' : '',
            }}
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <ErrorMessage>이메일 확인</ErrorMessage>}
        </InputBox>
        <InputBox>
          <NameStyle>비밀번호</NameStyle>
          <InputStyle
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: true,
              pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
            })}
          />
          {errors.password && (
            <ErrorMessage>
              비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.
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
            // ref={passwordRef}
            {...register('password_repeat', {
              validate: (value: string) => getValues('password') === value,
            })}
          />
          {/* {watch(passwordRef.current?.value)} */}
          {passwordRef.current?.value !== getValues('password')}
          {errors.password_repeat && (
            <ErrorMessage>비밀번호를 확인해 주세요.</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <NameStyle>이름</NameStyle>
          <InputStyle
            placeholder="이름"
            style={{ outline: errors.email ? '2px solid red' : '' }}
            {...register('name', {
              required: true,
              minLength: 2,
              valueAsNumber: false,
            })}
          />
          {errors.name && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
        </InputBox>
        <InputBox>
          <NameStyle>생년월일</NameStyle>
          <BirthdayBox>
            <BirthSelect
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
          <SubmitFailedButton>가입하기</SubmitFailedButton>
        ) : (
          <SubmitButton type={'submit'}>가입하기</SubmitButton>
        )}
      </Form>
      <SigupAgree>
        가입하시면 <AgreementText>이용약관</AgreementText>에 동의하시게 됩니다.
      </SigupAgree>
    </WrapContainer>
  );
};

export default SignUp;

const InputImgBox = styled.div`
  margin-bottom: 34px;
`;

const WrapContainer = styled.div`
  width: 600px;
  margin: 0 auto;
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
  height: 90px;
  background-color: #4286f4;
  color: white;
  margin-top: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
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
  height: 90px;
  background-color: gray;
  color: white;
  margin-top: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  border-radius: 8px;
  opacity: 0.2;
  pointer-events: none;
`;
const SigupAgree = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #666666;
`;
const AgreementText = styled.a`
  color: #4e89ef;
`;
const ImgButton = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
