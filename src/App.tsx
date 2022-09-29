import React from "react";
import { Counter } from "./features/counter/Counter";
import Carousel from './components/carousel/Carousel';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <Header/>
      <Carousel/>
      {/* <Counter /> */}
    </>
  );
}

export default App;
