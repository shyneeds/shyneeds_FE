import { BiCart, BiLogIn, BiLogOut, BiUser } from 'react-icons/bi';
import styled from 'styled-components';

// 로그아웃 상태
export const LogInView = () => {
  return (
    <>
      <NavStyle href="/">
        <BiCart size="1.7rem" />
        <p>관심상품</p>
      </NavStyle>
      <NavStyle href="login">
        <BiLogIn size="1.7rem" />
        <p>로그인</p>
      </NavStyle>
      <NavStyle href="signup">
        <BiUser size="1.7rem" />
        <p>회원가입</p>
      </NavStyle>
    </>
  );
};

// 로그인 상태
export const LogOutView = () => {
  return (
    <>
      <NavStyle href="/">
        <BiCart size="1.7rem" />
        <p>관심상품</p>
      </NavStyle>
      <NavStyle href="/">
        <BiLogOut size="1.7rem" />
        <p>로그아웃</p>
      </NavStyle>
      <NavStyle href="/mypage">
        <BiUser size="1.7rem" />
        <p>마이 페이지</p>
      </NavStyle>
    </>
  );
};

const NavStyle = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    color: #429bf4;
  }
  > p {
    font-size: 20px;
  }
`;
