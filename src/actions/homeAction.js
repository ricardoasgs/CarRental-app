import axios from "axios";
import { CAR_FETCHED, RENT_FETCHED } from "./types";

import { API_URL } from "../config/constants";

export function getCars() {
  return function(dispatch) {
    axios
      .get(`${API_URL}/car`)
      .then(response => {
        dispatch({
          type: CAR_FETCHED,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("Erro ao buscar Carros");
        console.log(err);
      });
  };
}

export function getRents(userId) {
  return function(dispatch) {
    axios
      .get(`${API_URL}/rentByUser/${userId}`)
      .then(response => {
        dispatch({
          type: RENT_FETCHED,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("Erro ao buscar Alugueis");
        console.log(err);
      });
  };
}
