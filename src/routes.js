import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Login} path="/login" />
    <Route component={Profile} path="/profile" />
    <Route
      render={() => {
        return <h1>404 Page Not Found.</h1>;
      }}
    />
  </Switch>
);
