import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "https://build-restaurant-passport.herokuapp.com",
    headers: {
      Authorization: getToken()
    }
  });
}
