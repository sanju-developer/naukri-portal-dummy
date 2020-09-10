import { commonActionType, LOGINREDUXCONSTANT } from "redux/constants";

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
        apiError: null
      };
    case `${LOGINREDUXCONSTANT}_${commonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      };

    default:
      return { ...state };
  }
};

export default loginReducer;
