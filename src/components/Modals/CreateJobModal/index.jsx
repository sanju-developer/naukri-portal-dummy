import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ModalBody from "./modalBody";
import {
  CreateJobFormField,
  clearLocalStorage
} from "utils/constants/commonConstants";
import { CreateJob } from "redux/actions/recruiterActions/createJobAction";

function CreateJobModal(props) {
  const history = useHistory();
  const { show, onHide, createJob, isApiLoading, apiData, apiError } = props;
  const [createJobForm, setCreateJobForm] = useState(CreateJobFormField);
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    if (
      createJobForm.description.length >= 3 &&
      createJobForm.title.length >= 3 &&
      createJobForm.location.length >= 3
    ) {
      setIsButtonDisable(false);
    } else setIsButtonDisable(true);
  }, [createJobForm]);

  useEffect(() => {
    if (apiData?.code === 201) {
      onHide();
    }
  }, [apiData]);

  useEffect(() => {
    if (apiError?.code === 401) {
      clearLocalStorage();
      history.replace("/");
    }
  }, [apiError]);

  const onChangeHandler = event => {
    setCreateJobForm({
      ...createJobForm,
      [event.target.id]: event.target.value
    });
  };

  const createBtnHandler = () => {
    createJob(createJobForm);
  };

  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      style={{
        display: `${show ? "block" : "none"}`
      }}
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      backdrop="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Job
            </h5>
          </div>
          <div class="modal-body">
            <ModalBody
              createJobForm={createJobForm}
              onChangeHandler={onChangeHandler}
            />
          </div>
          <div class="modal-footer">
            <button type="button" onClick={onHide} class="btn btn-secondary">
              cancel
            </button>
            <button
              onClick={createBtnHandler}
              type="button"
              disabled={isButtonDisable || isApiLoading}
              class="btn btn-primary"
            >
              {!isApiLoading ? (
                "Create"
              ) : (
                <>
                  Loading <div class="spinner-border"></div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createJob: jobData => dispatch(CreateJob(jobData))
  };
};

const mapStateToProps = state => {
  return {
    apiData: state.createJob.apiData,
    apiError: state.createJob.apiError,
    isApiLoading: state.createJob.isApiLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobModal);
