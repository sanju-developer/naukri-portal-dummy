import { commonActionType, APPLIED_JOBS, actionTypes } from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { applyForJobService } from "services/candidate/candidateService";

export const appliedJobs = jobId => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${APPLIED_JOBS}_${commonActionType.isApiLoading}`,
        true
      )
    );
    applyForJobService(jobId)
      .then(response => {
        dispatch(
          commonActionCreator(
            `${APPLIED_JOBS}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${APPLIED_JOBS}_${actionTypes.jobApplied}`,
            jobId
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${APPLIED_JOBS}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};
