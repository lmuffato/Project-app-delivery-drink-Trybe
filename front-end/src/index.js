import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
