import React from "react";
import { connect } from "react-redux";

import { clearLocalStorage } from "utils/constants/commonConstants";
import { loggedout } from "redux/actions/auth/loginAction";
import { routingEndpoints } from "api/endpoints";

import "./topbar.scss";

function Topbar(props) {
  const { history, logoutUser } = props;

  const logout = () => {
    clearLocalStorage();
    logoutUser();
    history.replace(routingEndpoints.login);
  };

  return (
    <div className="topbar-container d-flex justify-content-between">
      <h2>Vivek Rajoriya</h2>
      <button type="submit" className="btn btn-dark" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(loggedout())
  };
};
export default connect(null, mapDispatchToProps)(Topbar);
