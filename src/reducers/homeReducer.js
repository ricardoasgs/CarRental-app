import { CAR_FETCHED, RENT_FETCHED } from "../actions/types";

const homeInitialState = {
  list: [],
  rentList: []
};

const homeReducer = (state = homeInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case CAR_FETCHED: {
      Object.assign(newState, state, {
        list: action.payload
      });

      return newState;
    }
    case RENT_FETCHED: {
      Object.assign(newState, state, {
        rentList: action.payload
      });

      return newState;
    }
    default:
      return state;
  }
};

export default homeReducer;
