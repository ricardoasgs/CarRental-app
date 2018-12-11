import {
  USER_AUTH,
  USER_AUTH_SUCCESS,
  USER_AUTH_ERROR,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR
} from "../actions/types";

const loginInitialState = {
  user: {},
  message: "",
  loading: null,
  emailSent: false,
  error: "",
  login: null
};

const loginReducer = (state = loginInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case USER_AUTH: {
      Object.assign(newState, state, {
        loading: action.payload,
        login: false
      });

      return newState;
    }

    case USER_AUTH_SUCCESS: {
      Object.assign(newState, state, {
        user: action.payload,
        loading: null
      });

      return newState;
    }
    case USER_AUTH_ERROR: {
      Object.assign(newState, state, {
        error: action.payload,
        loading: null,
        login: true
      });

      return newState;
    }
    case USER_SIGNUP: {
      Object.assign(newState, state, {
        loading: action.payload
      });

      return newState;
    }
    case USER_SIGNUP_SUCCESS: {
      Object.assign(newState, state, {
        user: action.payload,
        loading: null,
        login: true
      });

      return newState;
    }
    case USER_SIGNUP_ERROR: {
      Object.assign(newState, state, {
        error: action.payload,
        loading: null
      });

      return newState;
    }
    default:
      return state;
  }
};

export default loginReducer;
