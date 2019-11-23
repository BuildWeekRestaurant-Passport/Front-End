import {
  FETCH_PLACE_START,
  FETCH_PLACE_SUCCESS,
  FETCH_PLACE_ERROR
} from "../actions/description";

export const initialState = {
  description: {
    name: "",
    city: "",
    address: "",
    description: "",
    city_id: ""
  },
  isLoading: true,
  error: null
};

export function reducerDescription(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLACE_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PLACE_SUCCESS:
      return {
        ...state,
        description: action.payload,
        isLoading: false
      };
    case FETCH_PLACE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
