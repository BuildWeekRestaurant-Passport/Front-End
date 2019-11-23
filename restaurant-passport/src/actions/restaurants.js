import axios from "axios";
import api from "../utils/api";

export const FETCH_LIST_START = "FETCH_LIST_START";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_ERROR = "FETCH_LIST_ERROR";

export function fetchPlaces() {
  return dispatch => {
    dispatch({ type: FETCH_LIST_START });
    api()
      .get("/cities/2/restaurants")
      .then(res => {
        dispatch({ type: FETCH_LIST_SUCCESS, payload: res.data.restaurants });
      })
      .catch(err => {
        dispatch({ type: FETCH_LIST_ERROR, payload: err });
      });
  };
}
