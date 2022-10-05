import React from 'react';
import Main from './pages/main/Main';
import Error from './pages/error/Error';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp/SignUpPage';
import MyPage from './pages/myPage/MyPage';
import Kakao from './pages/login/Kakao';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Kakao />} />
      </Routes>
    </>
  );
}

export default App;
