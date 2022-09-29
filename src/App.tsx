import React from "react";
// import { Counter } from "./features/counter/Counter";
import Carousel from './components/carousel/Carousel';
import Header from './components/common/Header';
import Footer from './components/Footer';
import { MainPage } from './pages/main/MainPage';

function App() {
  return (
    <>
      <Header/>
      <Carousel/>
      <MainPage />
      <Footer />
      {/* <Counter /> */}
    </>
  );
}

export default App;
