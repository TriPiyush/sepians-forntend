import React from "react";
import { Navigate , Route,Outlet  } from "react-router-dom";
import {  useSelector } from "react-redux";
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { isLoggedIn } = useSelector(state => state.auth);

  

  return (
    isLoggedIn ?  <Outlet/> : <Navigate  to="/login" />
       // isAuthenticated ?  <Outlet/> : <Navigate  to="/login" />
  );
}

export default ProtectedRoute;