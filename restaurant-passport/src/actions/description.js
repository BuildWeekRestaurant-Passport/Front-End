import api from "../utils/api";

export const FETCH_PLACE_START = "FETCH_PLACE_START";
export const FETCH_PLACE_SUCCESS = "FETCH_PLACE_SUCCESS";
export const FETCH_PLACE_ERROR = "FETCH_PLACE_ERROR";

export function fetchDescription(id) {
  return dispatch => {
    dispatch({ type: FETCH_PLACE_START });
    api()
      .get(`/cities/restaurants/${id}`)
      .then(res => {
        dispatch({ type: FETCH_PLACE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_PLACE_ERROR, payload: err });
      });
  };
}
