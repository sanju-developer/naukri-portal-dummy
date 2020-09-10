import {
  commonActionType,
  AVAILAIBLE_JOBS_FOR_CANDIDATE
} from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { getAvalaibleJobsForCandidateService } from "services/candidate/candidateService";

export const getPostedJobsForCandidates = () => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.isApiLoading}`,
        true
      )
    );
    getAvalaibleJobsForCandidateService()
      .then(response => {
        dispatch(
          commonActionCreator(
            `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.setData}`,
            response.data
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${AVAILAIBLE_JOBS_FOR_CANDIDATE}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};
