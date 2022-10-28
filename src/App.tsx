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
import Offers from './pages/offers/Offers';
import Reservation from './pages/reservation/Reservation';
import { useAppDispatch } from './app/hooks';
import { isLogin } from './features/kakaoLogin/kakaoLoginSlice';
import Cart from './pages/cart/Cart';
import GroupPage from './pages/groupPage/GroupPageView';
import DetailPage from './pages/community/Detail';
import Write from './pages/community/Write';
import Cancel from './pages/myPage/Cancel';
import { useCookies } from 'react-cookie';
import SubpageView from './pages/groupPage/SubpageView';

function App() {
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useAppDispatch();
  const loggedInfo = () => {
    cookies && dispatch(isLogin(cookies));
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
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/cancel" element={<Cancel />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginResult" element={<LoginResult />} />
        <Route path="/community/*" element={<Community />}></Route>
        <Route path="/community/detail/:id/*" element={<DetailPage />} />
        <Route path="/community/write/*" element={<Write />} />
        <Route path="/community/write/:modify" element={<Write />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id" element={<Offers />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subPage" element={<GroupPage />} />
        <Route path="/subPage_region" element={<SubpageView />} />
      </Routes>
    </>
  );
}

export default App;
