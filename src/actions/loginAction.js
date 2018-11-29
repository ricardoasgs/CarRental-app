import axios from "axios";
import {
  USER_AUTH,
  USER_AUTH_SUCCESS,
  USER_AUTH_ERROR,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR
} from "./types";

import { API_URL } from "../config/constants";

export function signin({ email, password }, callback) {
  return function(dispatch) {
    dispatch({
      type: USER_AUTH,
      payload: true
    });

    axios
      .post(`${API_URL}/signin`, { email, password })
      .then(response => {
        dispatch({
          type: USER_AUTH_SUCCESS,
          payload: response.data.user
        });

        localStorage.setItem("token", response.data.user.token);
        localStorage.setItem("userId", response.data.user._id);
        //console.log(response.data);
        callback();
      })
      .catch(err => {
        dispatch({
          type: USER_AUTH_ERROR,
          payload: err.response.data.message
        });
      });
  };
}

export function signup({ email, password, username }, callback) {
  return function(dispatch) {
    dispatch({
      type: USER_SIGNUP,
      payload: true
    });

    axios
      .post(`${API_URL}/signup`, { email, password, username })
      .then(response => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data.user
        });

        localStorage.setItem("token", response.data.token);
        callback();
        // - redirect to the route '/feed'
      })
      .catch(err => {
        dispatch({
          type: USER_SIGNUP_ERROR,
          payload: err.response.data.message
        });
      });
  };
}
