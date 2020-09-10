import { commonActionType, RECRUITER_CREATE_JOB } from "redux/constants";

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
};

const recruiterReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${RECRUITER_CREATE_JOB}_${commonActionType.isApiLoading}`:
      return {
        ...state,
        isApiLoading: action.payload
      };
    case `${RECRUITER_CREATE_JOB}_${commonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
        isApiFailed: false,
        apiError: null
      };
    case `${RECRUITER_CREATE_JOB}_${commonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      };

    case `${RECRUITER_CREATE_JOB}_${commonActionType.clearData}`:
      return {
        ...state,
        isApiFailed: false,
        isApiLoading: false,
        apiError: null,
        apiData: null
      };

    default:
      return { ...state };
  }
};

export default recruiterReducer;
