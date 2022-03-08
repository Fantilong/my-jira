// 该文件主要应用于打包

import React from "react";
import ReactDOM from "react-dom";
import { loadDevTools } from "jira-dev-tool";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProviders } from "./context";
import "antd/dist/antd.less";

// const div = document.createElement('div')

loadDevTools(() =>
  // const div: HTMLElement | null = document.getElementById('div')

  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    // div
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
