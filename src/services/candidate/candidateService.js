import { api } from "api/api";
import { apiEndpoints, CANDIDATES, JOBS } from "api/endpoints";
import { httpMethods } from "utils/constants/commonConstants";

export const getAvalaibleJobsForCandidateService = () => {
  return api(`${apiEndpoints.fetchAllAvalaibleJobs}`, httpMethods.GET);
};

export const applyForJobService = jobId => {
  return api(`${CANDIDATES}/${JOBS}`, httpMethods.POST, jobId);
};

export const getAppliedJobsService = () => {
  return api(`${CANDIDATES}/${JOBS}/applied`, httpMethods.GET);
};
