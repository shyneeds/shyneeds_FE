import React from 'react';
import Main from './pages/main/Main';
import Error from './pages/error/Error';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp/SignUpPage';
import Admin_Main from './pages/admin/Admin_Main';
import Admin_Product from './pages/admin/Admin_Product';
import LoginResult from './components/login/LoginResult';
import MyPage from './pages/myPage/MyPage';
import LoginPage from './pages/login/LoginPage';
import Community from './pages/community/Community';
import LoginRequest from './components/login/LoginRequest';
import Offers from './pages/offers/Offers';
import Reservation_Main from './components/reservation/Reservation_Main';
import { useAppDispatch } from './app/hooks';
import { isLogin } from './features/kakaoLogin/kakaoLoginSlice';
import Cart from './pages/cart/Cart';

function App() {
  const dispatch = useAppDispatch();
  const loggedInfo = () => {
    sessionStorage.getItem('accessToken') && dispatch(isLogin(sessionStorage));
  };
  return (
    <>
      {loggedInfo()}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin_Main />} />
        <Route path="/admin/product" element={<Admin_Product />} />
        <Route path="/mypage" element={<MyPage popup={false} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/LoginResult" element={<LoginResult />} />
        <Route path="/community" element={<Community />} />
        <Route path="/LoginRequest" element={<LoginRequest />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/reservation" element={<Reservation_Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
