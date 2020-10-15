import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
