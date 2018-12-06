import axios from "axios";
import { CAR_SELECTED, RENT_FINALIZED, RENT_CREATED } from "./types";
import { getRents } from "./homeAction";
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
        const userId = localStorage.getItem("userId");
        dispatch({
          type: RENT_FINALIZED,
          payload: response.data
        });
        dispatch(getRents(userId));
      })
      .catch(err => {
        console.log("Erro ao finalizar Alugueis");
        console.log(err);
      });
  };
}

export function createRent(user, car, callback) {
  return function(dispatch) {
    axios
      .post(`${API_URL}/rent`, { user, car })
      .then(response => {
        callback();
        dispatch({
          type: RENT_CREATED,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("Erro ao Criar Alugueis");
        console.log(err);
      });
  };
}
