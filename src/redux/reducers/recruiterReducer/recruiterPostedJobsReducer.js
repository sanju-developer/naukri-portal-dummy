import {
  commonActionType,
  RECRUITER_POSTED_JOBS,
  actionTypes
} from "redux/constants";

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
};

const RECRUITER_POSTED_JOBSReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${RECRUITER_POSTED_JOBS}_${commonActionType.isApiLoading}`:
      return {
        ...state,
        isApiLoading: action.payload
      };
    case `${RECRUITER_POSTED_JOBS}_${commonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
        isApiFailed: false,
        apiError: null
      };
    case `${RECRUITER_POSTED_JOBS}_${commonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      };

    case `${RECRUITER_POSTED_JOBS}_${actionTypes.deletePostedJob}`:
      return {
        ...state,
        apiData: {
          ...state.apiData,
          data: {
            ...state.apiData.data,
            data: state.apiData.data.data.filter(
              job => job.id !== action.payload.jobId
            )
          }
        }
      };

    default:
      return { ...state };
  }
};

export default RECRUITER_POSTED_JOBSReducer;
