import React from 'react';
import Main from './pages/main/Main';
import Error from './pages/error/Error';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp/SignUpPage';
import Mypage from './components/mypage/Mypage';
import Admin from './pages/admin/Admin';
import Admin_Main from './components/admin/Admin_Main';
import Admin_Product from './components/admin/Admin_Product';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/admin" element={<Admin_Main />} />
        <Route path="/admin/product" element={<Admin_Product />} />
      </Routes>
    </>
  );
}

export default App;
