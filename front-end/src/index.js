import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './context/userProvider';
import NewOrderProvider from './context/NewOrderProvider';
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NewOrderProvider>
          <App />
        </NewOrderProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
