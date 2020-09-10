import { commonActionType, PREVIOUS_APPLIED_JOBS } from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { getAppliedJobsService } from "services/candidate/candidateService";

export const fetchPreviousAppliedJobs = () => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${PREVIOUS_APPLIED_JOBS}_${commonActionType.isApiLoading}`,
        true
      )
    );
    getAppliedJobsService()
      .then(response => {
        dispatch(
          commonActionCreator(
            `${PREVIOUS_APPLIED_JOBS}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${PREVIOUS_APPLIED_JOBS}_${commonActionType.setData}`,
            response.data
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${PREVIOUS_APPLIED_JOBS}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};
