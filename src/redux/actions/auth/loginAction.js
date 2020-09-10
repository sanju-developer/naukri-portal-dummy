import {
  commonActionType,
  LOGINREDUXCONSTANT,
  actionTypes
} from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { LoginUserService } from "services/auth/loginService";
import { RegisterUserService } from "services/auth/registerService";

export const LoginUser = (formData, callFrom) => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${LOGINREDUXCONSTANT}_${commonActionType.isApiLoading}`,
        true
      )
    );
    service(formData, callFrom)
      .then(response => {
        dispatch(
          commonActionCreator(
            `${LOGINREDUXCONSTANT}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${LOGINREDUXCONSTANT}_${commonActionType.setData}`,
            response.data
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${LOGINREDUXCONSTANT}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};

export const loggedout = () => {
  return dispatch => {
    dispatch(
      commonActionCreator(`${LOGINREDUXCONSTANT}_${actionTypes.logout}`)
    );
  };
};

function service(formData, callFrom) {
  return callFrom === "register"
    ? RegisterUserService(formData)
    : LoginUserService(formData);
}
