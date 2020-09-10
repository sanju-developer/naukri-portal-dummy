import {
  commonActionType,
  PREVIOUS_APPLIED_JOBS,
  APPLIED_JOBS,
  actionTypes
} from "redux/constants";

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
};

const previousAppliedJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${PREVIOUS_APPLIED_JOBS}_${commonActionType.isApiLoading}`:
      return {
        ...state,
        isApiLoading: action.payload
      };
    case `${PREVIOUS_APPLIED_JOBS}_${commonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
        isApiFailed: false,
        apiError: null
      };
    case `${PREVIOUS_APPLIED_JOBS}_${commonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      };

    case `${PREVIOUS_APPLIED_JOBS}_${commonActionType.clearData}`:
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

export default previousAppliedJobsReducer;
