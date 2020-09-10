import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { iconName } from "components/Icons/iconNames";
import Icons from "components/Icons";
import { routingEndpoints } from "api/endpoints";

import "./login.scss";
import {
  loginFormField,
  emailRegex,
  setTokenToLocalStorage,
  setUserIdToLocalStorage,
  setUserRoleToLocalStorage
} from "utils/constants/commonConstants";
import Error from "components/Errors";
import { ErrorNames } from "components/Errors/errorNames";
import { LoginUser } from "redux/actions/auth/loginAction";

function LoginForm(props) {
  const { loginUser, apiData, apiError, isApiLoading } = props;
  const history = useHistory();
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [loginForm, setLoginForm] = useState(loginFormField);
  const [isEmailvalid, setIsEmailvalid] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  useEffect(() => {
    if (loginForm.password.length >= 6 && loginForm.email.length !== 0) {
      setIsButtonDisable(false);
    } else setIsButtonDisable(true);
  }, [loginForm]);

  useEffect(() => {
    if (isEmailvalid && isBtnClicked) {
      loginUser(loginForm);
    }
  }, [isEmailvalid, isBtnClicked]);

  useEffect(() => {
    if (apiData) {
      setTokenToLocalStorage(apiData?.data?.token);
      setUserIdToLocalStorage(apiData?.data?.id);
      setUserRoleToLocalStorage(apiData?.data?.userRole);
      if (apiData?.code === 200 && apiData?.data?.userRole === 0)
        history.replace(routingEndpoints.recruiterDashboard);
    }
    if (apiData?.code === 200 && apiData?.data?.userRole === 1)
      history.replace(routingEndpoints.candidateDashboard);
  }, [apiData]);

  const onChangeHandler = event => {
    setLoginForm({
      ...loginForm,
      [event.target.id]: event.target.value
    });
  };

  const loginBtnHandle = e => {
    e.preventDefault();
    setIsEmailvalid(emailRegex.test(loginForm.email.toLowerCase()));
    setIsBtnClicked(true);
    if (isEmailvalid && isBtnClicked) {
      loginUser(loginForm);
    }
  };

  return (
    <div className="entry-form">
      <h1 className="display-4 text-left login-form-title">Login</h1>
      {apiError && (
        <div className="error">
          <p>{apiError?.message}</p>
        </div>
      )}
      <form>
        <div className="form-group text-left">
          <label htmlFor="user-email-login">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={loginForm.email}
            onChange={onChangeHandler}
          />
          {!isEmailvalid && isBtnClicked && (
            <Error type={ErrorNames.emailNotvalid} />
          )}
        </div>
        <div className="form-group text-left">
          <label htmlFor="user-pswd-login">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={onChangeHandler}
          />
          {loginForm.password.length < 6 && isBtnClicked && (
            <Error type={ErrorNames.passwordLengthShouldBeMinimumOf6Digit} />
          )}
        </div>
        <button
          type="submit"
          onClick={() => history.push(routingEndpoints.forgotPswd)}
          className="right-side w-100 btn btn-link"
        >
          Forgot Password?
        </button>
        <div className="login-btn mt-4">
          <button
            type="submit"
            disabled={isButtonDisable || isApiLoading}
            className="btn btn-primary"
            onClick={loginBtnHandle}
          >
            Login
            <span className="pl-2">
              {!isApiLoading ? (
                <Icons type={iconName.rightArrow} />
              ) : (
                <span className="spinner-border"></span>
              )}
            </span>
          </button>
        </div>
      </form>
      <button
        type="button"
        className="text-center login-here pt-4 w-100 btn btn-link"
        onClick={() => history.push(routingEndpoints.register)}
      >
        Not a memeber? Register here
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: registerData => dispatch(LoginUser(registerData))
  };
};

const mapStateToProps = state => {
  return {
    apiData: state.login.apiData,
    apiError: state.login.apiError,
    isApiLoading: state.login.isApiLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
