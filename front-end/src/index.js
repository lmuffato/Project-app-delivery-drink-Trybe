import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode >,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
