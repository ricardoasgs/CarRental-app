import axios from "axios";
import { CAR_SELECTED, RENT_FINALIZED } from "./types";

import { API_URL } from "../config/constants";

export function selectCar(car, callback) {
  return function(dispatch) {
    dispatch({
      type: CAR_SELECTED,
      payload: car
    });
    callback();
  };
}

export function finalizeRent(_id) {
  return function(dispatch) {
    axios
      .put(`${API_URL}/rent`, { _id })
      .then(response => {
        dispatch({
          type: RENT_FINALIZED,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("Erro ao finalizar Alugueis");
        console.log(err);
      });
  };
}
