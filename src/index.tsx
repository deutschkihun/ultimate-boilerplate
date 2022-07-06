import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const rootNode = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App />
  </Provider>
);
