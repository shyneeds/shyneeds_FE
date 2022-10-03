import React from "react";
import Main from "./pages/main/Main";
import Error from "./pages/error/Error";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/signUp/SignUpPage";
import Mypage from "./components/mypage/Mypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
