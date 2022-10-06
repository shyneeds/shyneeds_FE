import React,{useState,useEffect, useRef} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";


const SignUp= () => {
  const now = new Date();
  const year = now.getFullYear();
  const [selectedDate, setSelectedDate] = useState({
    year : (year+"" as any),
    month : ('01' as any),
    day : '01'
  });
  
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const test = ["남성","여성"]
  const onSubmit = (data: any) => console.log(data);
  
  useEffect(() => { //only use for Test
    console.log(selectedDate);
  }, [selectedDate])
  
  // const onClickMale = setValue('gender','male')
  
  return (
    <WrapContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <NameStyle>이메일</NameStyle>
        <InputBox>
          <InputStyle
            type="text"
            placeholder="이메일"
            style={{
              outline: errors.email ? "2px solid red" : "",
            }}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <ErrorMessage>이메일 확인</ErrorMessage>}
        </InputBox>
        <InputBox>
        <NameStyle>비밀번호</NameStyle>
          <InputStyle
            type="password"
            placeholder="비밀번호"
            {...register("password", { required: true, pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/ })}
          />
          {errors.password && <ErrorMessage>비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.</ErrorMessage>}
        </InputBox>
        <InputBox>
        <NameStyle>비밀번호 확인</NameStyle>
          <InputStyle
            type="password"
            placeholder="비밀번호 확인"
            style={{
              outline: errors.password_repeat ? "2px solid red" : "",
            }}
            {...register("password_repeat", { validate : (value:string) => getValues('password')===value})}
          />
          {errors.password_repeat && <ErrorMessage>비밀번호를 확인해 주세요.</ErrorMessage>}
        </InputBox>
        <InputBox>
          <NameStyle>이름</NameStyle>
          <InputStyle
            placeholder="이름"
            style={{outline: errors.email ? "2px solid red" : "",}}
            {...register("name", { required: true, minLength: 2 })}
          />
          {errors.name && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
        </InputBox>
        <InputBox>
          <NameStyle>생년월일</NameStyle>
          <BirthdayBox>
            <BirthSelect 
              {...register("year", { required: true})} 
              onChange={(e)=> setSelectedDate({...selectedDate, year : e.target.value})}
            >
              {Array.from(new Array(80), (v,i)=>
                <option key={i} value={year-i}>{year-i}</option>
              )}
            </BirthSelect>
          <BirthSelect 
            {...register("month", { required: true})} 
            onChange={(e)=> setSelectedDate({...selectedDate, month : e.target.value})}>
              {Array.from(new Array(12), (v,i)=>
                <option key={i} value={1+i}>{1+i}</option>
              )}
          </BirthSelect>
          <BirthSelect 
            {...register("day", { required: true})} 
            onChange={(e)=> setSelectedDate({...selectedDate, day : e.target.value})}>
              {Array.from(new Array(new Date(selectedDate.year, selectedDate.month, 0).getDate()), (v,i)=>
                  <option key={i} value={1+i}>{1+i}</option>
              )}
          </BirthSelect>
          </BirthdayBox>
        </InputBox>
        <GednerBox>
          <NameStyle>성별</NameStyle>
          <GenderButton onClick={()=>setValue('gender','male')}>남성</GenderButton>
          <GenderButton onClick={()=>setValue('gender','female')}>여성</GenderButton>
        </GednerBox>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </Form>
    </WrapContainer>
  );
}

export default SignUp;

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
`;

const GednerBox = styled.div`
  width: 100%;
  margin: 0 auto;
  gap : 10px;
`

const Form = styled.form`
`;

const InputStyle = styled.input`
  outline: 1px solid;
  height: 50px;
  width: 100%;
  font-size: 16px;
  font-weight : 500px;
  border-radius: 8px;
  padding-left: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: 2px solid #34A853;
  }
`;
const NameStyle = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  padding-bottom: 6px;
`;

const BirthSelect = styled.select`
  align-items: center;
  padding: 11px 20px;
  width: 190px;
  height: 50px;
`
const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #EA4335;
  margin-top: -10px;
  padding-bottom : 20px;
`
const GenderButton = styled.button`
  height: 50px;
  width : 294px;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  cursor: pointer;
  color: red;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
`