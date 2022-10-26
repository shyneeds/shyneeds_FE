import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import GlobalStyle from './styles/global-styles';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </CookiesProvider>
);
