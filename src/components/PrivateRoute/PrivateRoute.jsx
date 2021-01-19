import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";

const PrivateRoute = ({ path, component }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "null") {
      const tokenExpiration = jwtDecode(token).exp;
      const timeNow = new Date().getTime() / 1000;

      if (tokenExpiration < timeNow) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth === null) {
    return <></>;
  } else if (isAuth) {
    return <Route exact path={path} component={component} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};

export default PrivateRoute;
