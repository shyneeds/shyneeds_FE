import React from "react";
import { Counter } from "./features/counter/Counter";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <Counter />
    </>
  );
}

export default App;
