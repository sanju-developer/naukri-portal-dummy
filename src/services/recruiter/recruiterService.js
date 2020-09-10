import { httpMethods } from "utils/constants/commonConstants";
import { apiEndpoints, CANDIDATES } from "api/endpoints";
import { api } from "api/api";

export const CreateJobService = data => {
  return api(`${apiEndpoints.createJob}`, httpMethods.POST, data);
};

export const getPotedJobsService = () => {
  return api(`${apiEndpoints.getPostedJobs}`, httpMethods.GET);
};

export const deletePostedJobsService = jobId => {
  return api(`${apiEndpoints.deletePostedJob}`, httpMethods.DELETE, jobId);
};

export const getOneJobCandidatesService = jobId => {
  return api(
    `${apiEndpoints.getPostedJobs}/${jobId}/${CANDIDATES}`,
    httpMethods.GET,
    jobId
  );
};
