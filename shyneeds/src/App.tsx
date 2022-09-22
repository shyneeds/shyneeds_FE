import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/' element={<Login />}></Route>
          {/* <Route path='/' element={<Main />}></Route> */}
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
