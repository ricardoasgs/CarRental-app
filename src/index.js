import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./config/store";

import AppLayout from "./components/AppLayout";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </AppLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
