import {
    COLOR_SUCCESS,
    COLOR_FAIL,
  
  } from "../actions/types";

  const initialState = {}
  export default function (userState = initialState, action) {
    const { type, payload } = action;
    switch (type) {
     
      case COLOR_SUCCESS:
        return {
          ...userState,
          
          ...payload.userData,
        };
      case COLOR_FAIL:
        return {
          ...userState,
          userData: {},
        };
     
      default:
        return userState;
    }
  }