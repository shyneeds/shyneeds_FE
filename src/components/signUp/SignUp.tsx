import React,{useState,useEffect} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

let now = new Date();
const year = now.getFullYear();

const SignUp= () => {
  const [selectedDate, setSelectedDate] = useState({
    year : (year+"" as any),
    month : ('01' as any),
    day : '01'
  });
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  
  useEffect(() => { //only use for Test
    console.log(selectedDate);
  }, [selectedDate])
  
  return (
    <WrapContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <NameStyle>이름</NameStyle>
          <InputStyle
            placeholder="이름"
            {...register("name", { required: true, minLength: 2 })}
          />
        </InputBox>
        <InputBox>
          <NameStyle>이메일</NameStyle>
          <InputStyle
            type="text"
            placeholder="이메일"
            style={{
              outline: errors.Email ? "2px solid red" : "",
            }}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && <p>이메일 확인</p>}
        </InputBox>
        <InputBox>
          <NameStyle>비밀번호</NameStyle>
          <InputStyle
            type="password"
            placeholder="비밀번호"
            {...register("password", { required: true, pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/ })}
          />
          {errors.password && <p>비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.</p>}
        </InputBox>
        <InputBox>
          <NameStyle>생년월일</NameStyle>
            <select 
              {...register("year", { required: true})} 
              onChange={(e)=> setSelectedDate({...selectedDate, year : e.target.value})}
            >
              {Array.from(new Array(80), (v,i)=>
                <option key={i} value={year-i}>{year-i}</option>
              )}
            </select>
          <select 
            {...register("month", { required: true})} 
            onChange={(e)=> setSelectedDate({...selectedDate, month : e.target.value})}>
              {Array.from(new Array(12), (v,i)=>
                <option key={i} value={1+i}>{1+i}</option>
              )}
          </select>
          <select 
            {...register("day", { required: true})} 
            onChange={(e)=> setSelectedDate({...selectedDate, day : e.target.value})}>
              {Array.from(new Array(new Date(selectedDate.year, selectedDate.month, 0).getDate()), (v,i)=>
                  <option key={i} value={1+i}>{1+i}</option>
              )}
          </select>
        </InputBox>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </Form>
    </WrapContainer>
  );
}

export default SignUp;

const WrapContainer = styled.div`
  width: 200px;
  margin: 0 auto;
  align-items: center;
  margin-top: 50px;
`;

const InputBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Form = styled.form``;

const InputStyle = styled.input`
  outline: 1px solid;
  height: 40px;
  width: 300px;
  font-size: large;
  border-radius: 100px;
  padding-left: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: 2px solid #ff710b;
  }
`;
const NameStyle = styled.div`
  font-size: 15px;
  color: #ff710b;
  font-weight: 700;
  line-height: 18px;
  padding-bottom: 6px;
`;

const BirthOption = styled.option`
  width : 30px;
`