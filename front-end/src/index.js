import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import App from './App';
import theme from './styles/themes';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme.light}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode >,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
