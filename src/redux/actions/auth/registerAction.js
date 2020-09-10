import { commonActionType, REGISTERREDUXCONSTANT } from "redux/constants";
import { RegisterUserService } from "services/auth/registerService";
import { commonActionCreator } from "../commonActionCreator";

export const RegisterUser = registerUserData => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${REGISTERREDUXCONSTANT}_${commonActionType.isApiLoading}`,
        true
      )
    );
    RegisterUserService(registerUserData)
      .then(response => {
        dispatch(
          commonActionCreator(
            `${REGISTERREDUXCONSTANT}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${REGISTERREDUXCONSTANT}_${commonActionType.setData}`,
            response.data
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${REGISTERREDUXCONSTANT}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};
