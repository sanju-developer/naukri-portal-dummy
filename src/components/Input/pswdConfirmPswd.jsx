import React from "react";
import { ErrorNames } from "components/Errors/errorNames";
import Error from "components/Errors";

function PswdConfirmPswd(props) {
  const {
    password,
    confirmPassword,
    onChangeHandler,
    isPasswordAndConfirmPasswordEqual,
    isBtnClicked
  } = props;

  return (
    <>
      <div className="form-group text-left">
        <label htmlFor="pswd">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChangeHandler}
        />
        <small className="smart-desc pt-1">Minimum length of 6 digits</small>
        {password.length < 6 && isBtnClicked && (
          <Error type={ErrorNames.passwordLengthShouldBeMinimumOf6Digit} />
        )}
      </div>
      <div className="form-group text-left">
        <label htmlFor="confirmpswd">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChangeHandler}
        />
        {confirmPassword.length < 6 && isBtnClicked && (
          <Error type={ErrorNames.passwordLengthShouldBeMinimumOf6Digit} />
        )}
      </div>
      {!isPasswordAndConfirmPasswordEqual && isBtnClicked && (
        <Error type={ErrorNames.passwordAndConfirmPssword} />
      )}
    </>
  );
}

export default PswdConfirmPswd;
