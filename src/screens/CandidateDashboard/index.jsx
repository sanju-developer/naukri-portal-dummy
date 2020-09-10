import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Topbar from "components/Topbar";
import { getPostedJobsForCandidates } from "redux/actions/candidate/fetchAllJobsForCandidateAction";
import ListPostedJobs from "components/Lists/ListPostedJobs";
import {
  candidateScreen,
  previousAppliedJobs
} from "utils/constants/commonConstants";
import { appliedJobs } from "redux/actions/candidate/applyForJob";
import { fetchPreviousAppliedJobs } from "redux/actions/candidate/appliedJobs";

import "./CandidateDashboard.scss";

function CandidateDashboard(props) {
  const {
    getAvailableJobs,
    isApiLoading,
    history,
    apiData,
    applyForJob,
    getPreviouslyAppliedJobs,
    apiDataOfPreviousJobs
  } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    getAvailableJobs();
  }, []);

  useEffect(() => {
    if (selectedTab === 1 && !apiDataOfPreviousJobs) {
      getPreviouslyAppliedJobs();
    }
  }, [selectedTab]);

  const applyBtnHandler = id => {
    applyForJob(id);
  };

  return (
    <>
      <Topbar history={history} />
      <div class="container">
        <div class="row">
          <div
            className={`col-sm border-bottom border-right text-center ${selectedTab ===
              0 && "active"}`}
            onClick={() => setSelectedTab(0)}
          >
            <h3 className="m-3">Jobs</h3>
          </div>
          <div
            className={`col-sm border-bottom text-center ${selectedTab === 1 &&
              "active"}`}
            onClick={() => setSelectedTab(1)}
          >
            <h3 className="m-3">Applied Jobs</h3>
          </div>
        </div>
      </div>

      {isApiLoading ? (
        <div className="spinner-border" />
      ) : (
        apiData && (
          <ListPostedJobs
            screen={selectedTab === 0 ? candidateScreen : previousAppliedJobs}
            apiData={selectedTab === 0 ? apiData : apiDataOfPreviousJobs}
            btnHandler={applyBtnHandler}
          />
        )
      )}
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAvailableJobs: () => dispatch(getPostedJobsForCandidates()),
    applyForJob: id => dispatch(appliedJobs({ jobId: id })),
    getPreviouslyAppliedJobs: () => dispatch(fetchPreviousAppliedJobs())
  };
};

const mapStateToProps = state => {
  return {
    apiData: state.jobsForCandidates.apiData,
    apiError: state.jobsForCandidates.apiError,
    isApiLoading: state.jobsForCandidates.isApiLoading,
    apiDataOfPreviousJobs: state.previousAppliedJobs.apiData
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CandidateDashboard)
);
