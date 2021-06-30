import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getLocalstorage } from "../utils/isAuth";

export const PublicRoute = ({ component:Component, restricted, ...rest }) => {
   
  return (
    <Route
      {...rest}
      render={(props) =>
        getLocalstorage() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
