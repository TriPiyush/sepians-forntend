import {
  COLOR_SUCCESS,
  COLOR_FAIL,
  SET_MESSAGE,
} from "./types";
import AuthService from "../../services/auth.sevice";

export const getcolor = () => (dispatch) => {
  return AuthService.getcolor().then(
    (data) => {
      dispatch({
        type: COLOR_SUCCESS,
        payload: { userData: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: COLOR_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const updatecolor = (label, color) => (dispatch) => {
  return AuthService.updatecolor(label, color).then(
    (data) => {
      dispatch({
        type: COLOR_SUCCESS,
        payload: { userData: { label, color } },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: COLOR_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};