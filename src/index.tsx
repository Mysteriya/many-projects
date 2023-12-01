import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { Provider } from "../node_modules/react-redux/es/exports";

import App from "./App";

import { store } from "./redux/store";

import "./scss/App.scss";

const rootElem = document.getElementById("root")

if(rootElem){
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

