import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getLocalstorage } from "../utils/isAuth";
const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        getLocalstorage()   ? children : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
