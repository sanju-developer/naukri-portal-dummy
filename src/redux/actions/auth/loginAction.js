import {
  commonActionType,
  LOGINREDUXCONSTANT,
  actionTypes
} from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { LoginUserService } from "services/auth/loginService";

export const LoginUser = loginUserData => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${LOGINREDUXCONSTANT}_${commonActionType.isApiLoading}`,
        true
      )
    );
    LoginUserService(loginUserData)
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
