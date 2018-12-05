import { CAR_SELECTED, RENT_FINALIZED } from "../actions/types";

const detailsInitialState = {
  car: {}
};

const detailReducer = (state = detailsInitialState, action) => {
  const newState = {};

  switch (action.type) {
    case CAR_SELECTED: {
      Object.assign(newState, state, {
        car: action.payload
      });
      return newState;
    }
    case RENT_FINALIZED: {
      Object.assign(newState, state, {
        car: ""
      });
      return newState;
    }
    default:
      return state;
  }
};

export default detailReducer;
