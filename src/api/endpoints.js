export const routingEndpoints = {
  register: "/register",
  login: "/login",
  forgotPswd: "/reset-password",
  recruiterDashboard: "/recruiter-dashboard",
  candidateDashboard: "/candidate-dashboard"
};

const JOBS = "jobs";
const RECRUITER = "recruiters";
export const CANDIDATES = "candidates";

export const apiEndpoints = {
  register: "auth/register",
  login: "auth/login",
  createJob: `${JOBS}/`,
  getPostedJobs: `${RECRUITER}/${JOBS}`,
  deletePostedJob: `${JOBS}?`
};
