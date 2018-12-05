import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./config/store";

import AppLayout from "./components/AppLayout";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import HomeScreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";
import RentScreen from "./views/RentScreen";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/rents" component={RentScreen} />
        <Route exact path="/details" component={DetailsScreen} />
      </AppLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
