import React from "react";

import Icons from "components/Icons";
import { iconName } from "components/Icons/iconNames";
import {
  candidateScreen,
  previousAppliedJobs
} from "utils/constants/commonConstants";

function ListPostedJobs(props) {
  const { apiData, btnHandler, screen } = props;

  return (
    <ul className="list-group">
      {apiData && apiData?.data?.length === 0 ? (
        <div className="">No posted jobs found</div>
      ) : (
        apiData &&
        apiData?.data?.map(myJobs => {
          return (
            <>
              <li key={myJobs.id} className="list-group-item m-3 border">
                <div>
                  <h3>Title:</h3>
                  {myJobs.title}
                </div>
                <div>
                  <h3>Description:</h3>
                  {myJobs.description}
                </div>
                <div>
                  <h3>Location:</h3>
                  {myJobs.location.toLowerCase()}
                </div>
                <div className="d-flex flex-row-reverse">
                  {screen !== previousAppliedJobs && (
                    <button
                      disabled={myJobs?.isApplied}
                      className={`btn btn-${
                        screen === candidateScreen ? "success" : "danger"
                      }`}
                      onClick={() => btnHandler(myJobs.id)}
                    >
                      <span className="pr-2">
                        {screen === candidateScreen
                          ? myJobs?.isApplied
                            ? "Applied"
                            : "Apply"
                          : "Delete Job"}
                      </span>
                      {screen === candidateScreen ? (
                        <Icons type={iconName.job} />
                      ) : (
                        <Icons type={iconName.delete} />
                      )}
                    </button>
                  )}
                </div>
              </li>
            </>
          );
        })
      )}
    </ul>
  );
}

export default ListPostedJobs;
