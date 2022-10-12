import React from 'react';
import Main from './pages/main/Main';
import Error from './pages/error/Error';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp/SignUpPage';
import Admin_Main from './pages/admin/Admin_Main';
import Admin_Product from './pages/admin/Admin_Product';
import TestLoginPage from './pages/testLogin/TestLoginPage';
import LoginResult from './components/testLogin/LoginResult';
import MyPage from './pages/myPage/MyPage';
import Kakao from './pages/login/Kakao';
import Community from './pages/community/Community';
import LoginRequest from './components/testLogin/LoginRequest';
import Offers from './pages/offers/Offers';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin_Main />} />
        <Route path="/admin/product" element={<Admin_Product />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Kakao />} />
        <Route path="/testLogin" element={<TestLoginPage />} />
        <Route path="/testLoginResult" element={<LoginResult />} />
        <Route path="/community" element={<Community />} />
        <Route path="/testLoginRequest" element={<LoginRequest />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </>
  );
}

export default App;
