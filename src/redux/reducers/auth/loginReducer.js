import {
  commonActionType,
  LOGINREDUXCONSTANT,
  actionTypes
} from "redux/constants";

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGINREDUXCONSTANT}_${commonActionType.isApiLoading}`:
      return {
        ...state,
        isApiLoading: action.payload
      };
    case `${LOGINREDUXCONSTANT}_${commonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
        isApiFailed: false,
        apiError: null,
        isLoggedIn: true
      };
    case `${LOGINREDUXCONSTANT}_${commonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      };

    case `${LOGINREDUXCONSTANT}_${actionTypes.logout}`:
      return {
        ...state,
        isLoggedIn: false,
        apiData: null
      };

    default:
      return { ...state };
  }
};

export default loginReducer;
