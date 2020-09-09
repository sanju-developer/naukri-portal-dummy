import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { iconName } from "components/Icons/iconNames";
import Icons from "components/Icons";
import PswdConfirmPswd from "components/Input/pswdConfirmPswd";
import SkillsField from "components/Input/SkillsInput";
import { routingEndpoints } from "api/endpoints";
import {
  registerFormField,
  UserRoles,
  emailRegex
} from "utils/constants/commonConstants";

import "./register.scss";
import Error from "components/Errors";
import { ErrorNames } from "components/Errors/errorNames";

function RegisterForm(props) {
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState(registerFormField);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [
    isPasswordAndConfirmPasswordEqual,
    setIsPasswordAndConfirmPasswordEqual
  ] = useState(false);
  const [isEmailvalid, setIsEmailvalid] = useState(false);

  useEffect(() => {
    if (
      registerForm.confirmPassword.length !== 0 &&
      registerForm.password.length !== 0 &&
      registerForm.name.length !== 0 &&
      registerForm.email.length !== 0 &&
      registerForm.skills.length !== 0
    ) {
      setIsButtonDisable(false);
    } else setIsButtonDisable(true);
  }, [registerForm]);

  const onChangeHandler = event => {
    setRegisterForm({
      ...registerForm,
      [event.target.id]: event.target.selectedIndex ?? event.target.value
    });
  };

  const registerBtnHandle = e => {
    e.preventDefault();
    if (registerForm.password === registerForm.confirmPassword) {
      setIsPasswordAndConfirmPasswordEqual(false);
    } else setIsPasswordAndConfirmPasswordEqual(true);
    setIsEmailvalid(!emailRegex.test(registerForm.email.toLowerCase()));
  };

  const onChangeSkillsHandler = data => {
    let skills = [];
    data.map(item => skills.push(item.text));
    setRegisterForm({
      ...registerForm,
      skills: skills.join(",")
    });
  };

  return (
    <div className="entry-form">
      <h1 className="display-4 text-left register-form-title">Register</h1>
      <form>
        <div className="form-group text-left">
          <label htmlFor="formname">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="form-name"
            placeholder="Enter name"
            value={registerForm.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userrole">Role</label>
          <select
            className="form-control"
            id="userRole"
            onChange={onChangeHandler}
          >
            {UserRoles.map(roles => (
              <option key={roles.id} value={UserRoles[registerForm.userRole]}>
                {roles.value}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group text-left">
          <label htmlFor="useremail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={registerForm.email}
            onChange={onChangeHandler}
          />
          {isEmailvalid && <Error type={ErrorNames.emailNotvalid} />}
        </div>
        <PswdConfirmPswd
          password={registerForm.password}
          confirmPassword={registerForm.confirmPassword}
          onChangeHandler={onChangeHandler}
          isPasswordAndConfirmPasswordEqual={isPasswordAndConfirmPasswordEqual}
        />
        <label htmlFor="skills">Skills</label>
        <SkillsField addSkills={onChangeSkillsHandler} />
        <div className="login-btn mt-4">
          <button
            disabled={isButtonDisable}
            type="submit"
            className="btn btn-primary"
            onClick={registerBtnHandle}
          >
            Register
            <span className="pl-2">
              <Icons type={iconName.rightArrow} />
            </span>
          </button>
        </div>
      </form>
      <button
        type="button"
        className="text-center login-here pt-4 w-100 btn btn-link"
        onClick={() => history.push(routingEndpoints.login)}
      >
        Already a memeber? login here
      </button>
    </div>
  );
}

export default RegisterForm;
