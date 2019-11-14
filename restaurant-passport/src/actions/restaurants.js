import axios from "axios";

export const FETCH_LIST_START = "FETCH_LIST_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export function fetchPlaces() {
  return dispatch => {
    dispatch({ type: FETCH_LIST_START });
    axios
      .get("https://build-restaurant-passport.herokuapp.com/")
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_ERROR, payload: err });
      });
  };
}
