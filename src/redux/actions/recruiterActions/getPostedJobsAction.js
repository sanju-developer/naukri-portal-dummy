import { commonActionType, RECRUITER_POSTED_JOBS } from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { getPotedJobsService } from "services/recruiter/recruiterService";

export const getPostedJobs = () => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${RECRUITER_POSTED_JOBS}_${commonActionType.isApiLoading}`,
        true
      )
    );
    getPotedJobsService()
      .then(response => {
        dispatch(
          commonActionCreator(
            `${RECRUITER_POSTED_JOBS}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${RECRUITER_POSTED_JOBS}_${commonActionType.setData}`,
            response.data
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
