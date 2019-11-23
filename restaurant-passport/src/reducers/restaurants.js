import {
  FETCH_LIST_START,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_ERROR
} from "../actions/restaurants";

export const initialState = {
  places: [
    {
      restID: null,
      restName: ""
    }
  ],
  isLoading: true,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        places: action.payload,
        isLoading: false
      };
    case FETCH_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
