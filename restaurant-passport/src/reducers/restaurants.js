import {
  FETCH_LIST_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURF_ERROR
} from "../actions/restaurants";

export const initialState = {
  places: [
    {
      //   name: "",
      //   city: "",
      //   address: "",
      //   description: "",
      //   city_id: ""

      name: "stuff",
      city: "nashville",
      address: "123street",
      description: "blah blah",
      city_id: "1"
    },
    {
      //   name: "",
      //   city: "",
      //   address: "",
      //   description: "",
      //   city_id: ""

      name: "stuff",
      city: "nashville",
      address: "123street",
      description: "blah blah",
      city_id: "1"
    },
    {
      //   name: "",
      //   city: "",
      //   address: "",
      //   description: "",
      //   city_id: ""

      name: "stuff",
      city: "nashville",
      address: "123street",
      description: "blah blah",
      city_id: "1"
    },
    {
      //   name: "",
      //   city: "",
      //   address: "",
      //   description: "",
      //   city_id: ""

      name: "stuff",
      city: "nashville",
      address: "123street",
      description: "blah blah",
      city_id: "1"
    },
    {
      //   name: "",
      //   city: "",
      //   address: "",
      //   description: "",
      //   city_id: ""

      name: "stuff",
      city: "nashville",
      address: "123street",
      description: "blah blah",
      city_id: "1"
    }
  ],
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    // case FETCH_LIST_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case FETCH_SMURFS_SUCCESS:
    //   return {
    //     ...state,
    //     places: action.payload,
    //     isLoading: false
    //   };
    // case FETCH_SMURF_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
    default:
      return state;
  }
}
