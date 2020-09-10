import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "screens/Login";
import RegisterForm from "screens/Register";
import { routingEndpoints } from "api/endpoints";
import ForgotPassword from "screens/ForgotPassword";
import RecruiterDashboard from "screens/RecruiterDashboard";
import CandidateDashboard from "screens/CandidateDashboard";

export default function Routing() {
  return (
    <Router>
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
        <Route exact path={routingEndpoints.recruiterDashboard}>
          <RecruiterDashboard />
        </Route>
        <Route exact path={routingEndpoints.candidateDashboard}>
          <CandidateDashboard />
        </Route>
      </Switch>
    </Router>
  );
}
