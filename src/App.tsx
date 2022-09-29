import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import GlobalStyle from './styles/global-styles';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
