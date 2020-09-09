import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "screens/Login";
import RegisterForm from "screens/Register";
import { routingEndpoints } from "api/endpoints";
import ForgotPassword from "screens/ForgotPassword";

export default function Routing() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <RegisterForm />
        </Route>
        <Route exact path={routingEndpoints.login}>
          <LoginForm />
        </Route>
        <Route exact path={routingEndpoints.register}>
          <RegisterForm />
        </Route>
        <Route exact path={routingEndpoints.forgotPswd}>
          <ForgotPassword />
        </Route>
      </Switch>
    </Router>
  );
}
