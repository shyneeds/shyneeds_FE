import { BiCart, BiLogIn, BiLogOut, BiUser } from 'react-icons/bi';
import styled from 'styled-components';

// 로그아웃 상태
export const NavLogIn = () => {
  return (
    <>
      <NavStyle href="/">
        <BiCart size="1.7rem" />
        <p>관심상품</p>
      </NavStyle>
      <NavStyle href="/">
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
export const NavLogOut = () => {
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
  width: 8rem;
  margin: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    color: #429bf4;
  }
  > p {
    font-size: 20px;
  }
`;
