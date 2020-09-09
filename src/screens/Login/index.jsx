import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { iconName } from "components/Icons/iconNames";
import Icons from "components/Icons";
import { routingEndpoints } from "api/endpoints";

import "./login.scss";
import { loginFormField, emailRegex } from "utils/constants/commonConstants";
import Error from "components/Errors";
import { ErrorNames } from "components/Errors/errorNames";

function LoginForm() {
  const history = useHistory();
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [loginForm, setLoginForm] = useState(loginFormField);
  const [isEmailvalid, setIsEmailvalid] = useState(false);

  useEffect(() => {
    if (loginForm.password.length !== 0 && loginForm.email.length !== 0) {
      setIsButtonDisable(false);
    } else setIsButtonDisable(true);
  }, [loginForm]);

  const onChangeHandler = event => {
    setLoginForm({
      ...loginForm,
      [event.target.id]: event.target.value
    });
  };

  const loginBtnHandle = e => {
    e.preventDefault();
    setIsEmailvalid(!emailRegex.test(loginForm.email.toLowerCase()));
  };

  return (
    <div className="entry-form">
      <h1 className="display-4 text-left login-form-title">Login</h1>
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
          {isEmailvalid && <Error type={ErrorNames.emailNotvalid} />}
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
            disabled={isButtonDisable}
            className="btn btn-primary"
            onClick={loginBtnHandle}
          >
            Login
            <span className="pl-2">
              <Icons type={iconName.rightArrow} />
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

export default LoginForm;
