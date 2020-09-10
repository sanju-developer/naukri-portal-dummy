import { combineReducers } from "redux";
import loginReducer from "./auth/loginReducer";
import recruiterReducer from "./recruiterReducer/recruiter";
import recruiterPostedJobsReducer from "./recruiterReducer/recruiterPostedJobsReducer";
import candidateReducer from "./candidateReducer/candidate";
import previousAppliedJobsReducer from "./candidateReducer/previousAppliedJobsReducer";

const rootReducer = combineReducers({
  userData: loginReducer,
  createJob: recruiterReducer,
  recruiterPostedJobs: recruiterPostedJobsReducer,
  jobsForCandidates: candidateReducer,
  previousAppliedJobs: previousAppliedJobsReducer
});

export default rootReducer;
