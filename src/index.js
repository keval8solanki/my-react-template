import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import {RecoilRoot} from 'recoil'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
