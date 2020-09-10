import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Icons from "components/Icons";
import { iconName } from "components/Icons/iconNames";
import CreateJobModal from "components/Modals/CreateJobModal";
import { getPostedJobs } from "redux/actions/recruiterActions/getPostedJobsAction";
import { deletePostedJobs } from "redux/actions/recruiterActions/deletePostedJobAction";
import { useHistory } from "react-router-dom";

import ListPostedJobs from "components/Lists/ListPostedJobs";
import "./recruiterDashboard.scss";
import { RECRUITER_CREATE_JOB, commonActionType } from "redux/constants";
import { commonActionCreator } from "redux/actions/commonActionCreator";
import Topbar from "components/Topbar";
import { recruiterScreen } from "utils/constants/commonConstants";

function RecruiterDashboard(props) {
  const {
    getPostedJobs,
    isApiLoading,
    apiData,
    apiError,
    deleteJob,
    createJobApiData,
    clearDataCreateJobData
  } = props;
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getPostedJobs();
  }, []);

  const deleteBtnhandler = jobId => {
    deleteJob(jobId);
  };

  const onHide = () => {
    setShowCreateJobModal(false);
    if (createJobApiData?.data) {
      clearDataCreateJobData();
      getPostedJobs();
    }
  };

  return (
    <div className="recruiter-container">
      <Topbar history={history} />
      <div className="create-job-section">
        <button
          data-toggle="modal"
          data-target="#exampleModal"
          className="btn btn-success"
          onClick={() => setShowCreateJobModal(true)}
        >
          <Icons type={iconName.add} /> Create a job
        </button>
      </div>
      {showCreateJobModal && (
        <CreateJobModal onHide={onHide} show={showCreateJobModal} />
      )}
      <h1 className="m-3">My posted jobs</h1>
      {isApiLoading ? (
        <div className="spinner-border" />
      ) : (
        apiData && (
          <ListPostedJobs
            apiData={apiData?.data}
            btnHandler={deleteBtnhandler}
            screen={recruiterScreen}
          />
        )
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getPostedJobs: () => dispatch(getPostedJobs()),
    deleteJob: jobId => dispatch(deletePostedJobs({ jobId: jobId })),
    clearDataCreateJobData: () =>
      dispatch(
        commonActionCreator(
          `${RECRUITER_CREATE_JOB}_${commonActionType.clearData}`,
          false
        )
      )
  };
};

const mapStateToProps = state => {
  return {
    apiData: state.recruiterPostedJobs.apiData,
    apiError: state.recruiterPostedJobs.apiError,
    isApiLoading: state.recruiterPostedJobs.isApiLoading,
    createJobApiData: state.createJob.apiData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterDashboard);
