import {
  commonActionType,
  RECRUITER_POSTED_JOBS,
  actionTypes
} from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { deletePostedJobsService } from "services/recruiter/recruiterService";

export const deletePostedJobs = jobId => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${RECRUITER_POSTED_JOBS}_${commonActionType.isApiLoading}`,
        true
      )
    );
    deletePostedJobsService(jobId)
      .then(response => {
        dispatch(
          commonActionCreator(
            `${RECRUITER_POSTED_JOBS}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${RECRUITER_POSTED_JOBS}_${actionTypes.deletePostedJob}`,
            jobId
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${RECRUITER_POSTED_JOBS}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};
