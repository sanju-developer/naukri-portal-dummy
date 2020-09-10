import {
  commonActionType,
  AVAILAIBLE_JOBS_FOR_CANDIDATE,
  APPLIED_JOBS,
  actionTypes
} from "redux/constants";

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
};

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.isApiLoading}`:
      return {
        ...state,
        isApiLoading: action.payload
      };
    case `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
        isApiFailed: false,
        apiError: null
      };
    case `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      };

    case `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.clearData}`:
      return {
        ...state,
        isApiFailed: false,
        isApiLoading: false,
        apiError: null,
        apiData: null
      };

    case `${APPLIED_JOBS}_${actionTypes.jobApplied}`:
      return {
        ...state,
        apiData: {
          ...state.apiData,
          data: state.apiData.data.map(job => {
            return job.id === action.payload.jobId
              ? { ...job, isApplied: true }
              : job;
          })
        }
      };

    default:
      return { ...state };
  }
};

export default candidateReducer;
