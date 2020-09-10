import { combineReducers } from "redux";
import registerReducer from "./auth/registerReducer";
import loginReducer from "./auth/loginReducer";
import recruiterReducer from "./recruiterReducer/recruiter";
import recruiterPostedJobsReducer from "./recruiterReducer/recruiterPostedJobsReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  createJob: recruiterReducer,
  recruiterPostedJobs: recruiterPostedJobsReducer
});

export default rootReducer;
