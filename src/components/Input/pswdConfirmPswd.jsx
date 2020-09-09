import React from "react";
import { ErrorNames } from "components/Errors/errorNames";
import Error from "components/Errors";

function PswdConfirmPswd(props) {
  const {
    password,
    confirmPassword,
    onChangeHandler,
    isPasswordAndConfirmPasswordEqual
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
      </div>
      {isPasswordAndConfirmPasswordEqual && (
        <Error type={ErrorNames.passwordAndConfirmPssword} />
      )}
    </>
  );
}

export default PswdConfirmPswd;
