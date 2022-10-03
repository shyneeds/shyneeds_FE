import React from "react";
import Main from "./pages/main/Main";
import Error from "./pages/error/Error"
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
