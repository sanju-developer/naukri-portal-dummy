import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PswdConfirmPswd from "components/Input/pswdConfirmPswd";
import Icons from "components/Icons";
import { iconName } from "components/Icons/iconNames";
import { resetPasswordFormField } from "utils/constants/commonConstants";

function ForgotPassword() {
  const history = useHistory();
  const [resetPasswordForm, setResetPasswordForm] = useState(
    resetPasswordFormField
  );
  const [
    isPasswordAndConfirmPasswordEqual,
    setIsPasswordAndConfirmPasswordEqual
  ] = useState(false);
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    if (
      resetPasswordForm.confirmPassword.length !== 0 &&
      resetPasswordForm.password.length !== 0
    ) {
      setIsButtonDisable(false);
    } else setIsButtonDisable(true);
  }, [resetPasswordForm]);

  const resetPasswordBtnHandle = e => {
    e.preventDefault();
    if (resetPasswordForm.password === resetPasswordForm.confirmPassword) {
      setIsPasswordAndConfirmPasswordEqual(false);
    } else setIsPasswordAndConfirmPasswordEqual(true);
  };

  const onChangeHandler = event => {
    setResetPasswordForm({
      ...resetPasswordForm,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div className="entry-form">
      <h1 className="display-4 text-left login-form-title">Reset Password</h1>
      <PswdConfirmPswd
        password={resetPasswordForm.password}
        confirmPassword={resetPasswordForm.confirmPassword}
        onChangeHandler={onChangeHandler}
        isPasswordAndConfirmPasswordEqual={isPasswordAndConfirmPasswordEqual}
      />
      <div className="login-btn mt-4">
        <button
          disabled={isButtonDisable}
          type="submit"
          className="btn btn-primary"
          onClick={resetPasswordBtnHandle}
        >
          Reset password
          <span className="pl-2">
            <Icons type={iconName.rightArrow} />
          </span>
        </button>
      </div>
      <button
        type="button"
        className="text-center login-here pt-4 w-100 btn btn-link"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
}

export default ForgotPassword;
