import { commonActionType, REGISTERREDUXCONSTANT } from "redux/constants";

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTERREDUXCONSTANT}_${commonActionType.isApiLoading}`:
      return {
        ...state,
        isApiLoading: action.payload
      };
    case `${REGISTERREDUXCONSTANT}_${commonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
        isApiFailed: false,
        apiError: null
      };
    case `${REGISTERREDUXCONSTANT}_${commonActionType.setError}`:
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

export default registerReducer;
