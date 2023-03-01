import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3fRJYLVPZWQBF9AAdnnbJ7wbFT7PyNf0",
  authDomain: "instant-chatty.firebaseapp.com",
  databaseURL: "https://instant-chatty-default-rtdb.firebaseio.com",
  projectId: "instant-chatty",
  storageBucket: "instant-chatty.appspot.com",
  messagingSenderId: "792506044070",
  appId: "1:792506044070:web:b72731c403f59f3976ae67",
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
