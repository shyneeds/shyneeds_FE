import React from 'react';
import Main from './pages/main/Main';
import Error from './pages/error/Error';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp/SignUpPage';
import Admin from './pages/admin/Admin';
import Admin_Main from './components/admin/Admin_Main';
import Admin_Product from './components/admin/Admin_Product';
import TestLoginPage from './pages/testLogin/TestLoginPage';
import LoginResult from './components/testLogin/LoginResult';
import MyPage from './pages/myPage/MyPage';
import Kakao from './pages/login/Kakao';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route path="/admin" element={<Admin_Product />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Kakao />} />
        <Route path="/testLogin" element={<TestLoginPage />} />
        <Route path="/testLoginResult" element={<LoginResult />} />
      </Routes>
    </>
  );
}

export default App;
