import axios from "axios";
import authHeader from './authHeader';
const API_URL = "http://localhost:8000/";

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const getcolor = () => {
  return axios
    .get(API_URL + "getcolor", { headers: authHeader() })
    .then((response) => {

      return response.data;
    });
};
const updatecolor = (label,color) => {
  return axios
    .post(API_URL + "updatecolor",{label,color} ,{ headers: authHeader() })
    .then((response) => {

      return {label,color};
    });
};
const logout = () => {
  localStorage.removeItem("user");

};
export default {
  updatecolor,
  login,
  logout,
  getcolor,
};