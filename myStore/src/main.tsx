import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";
import { Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </Provider>
);
