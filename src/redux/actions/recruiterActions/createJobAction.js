import { commonActionType, RECRUITER_CREATE_JOB } from "redux/constants";
import { commonActionCreator } from "../commonActionCreator";
import { CreateJobService } from "services/recruiter/recruiterService";

export const CreateJob = jobData => {
  return dispatch => {
    dispatch(
      commonActionCreator(
        `${RECRUITER_CREATE_JOB}_${commonActionType.isApiLoading}`,
        true
      )
    );
    CreateJobService(jobData)
      .then(response => {
        dispatch(
          commonActionCreator(
            `${RECRUITER_CREATE_JOB}_${commonActionType.isApiLoading}`,
            false
          )
        );
        dispatch(
          commonActionCreator(
            `${RECRUITER_CREATE_JOB}_${commonActionType.setData}`,
            response.data
          )
        );
      })
      .catch(error =>
        dispatch(
          commonActionCreator(
            `${RECRUITER_CREATE_JOB}_${commonActionType.setError}`,
            error.response.data
          )
        )
      );
  };
};
