import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ApiProvider from './context/ApiProvider';
import UserProvider from './context/UserProvider';
import ProductListProvider from "./context/ProductListProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
      <UserProvider>
        <ProductListProvider>
            <App />
        </ProductListProvider>
      </UserProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
