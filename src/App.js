import React from "react";
import "./App.css";
import Routing from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  getUserRoleFromLocalStorage,
  getTokenFromLocalStorage
} from "utils/constants/commonConstants";
import CandidateDashboard from "screens/CandidateDashboard";
import Topbar from "components/Topbar";
import RecruiterDashboard from "screens/RecruiterDashboard";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        {JSON.parse(getUserRoleFromLocalStorage()) === 0 ? (
          <>
            <Topbar />
            <RecruiterDashboard />
          </>
        ) : (
          <>
            <Topbar />
            <CandidateDashboard />
          </>
        )}
        {!getTokenFromLocalStorage() && <Routing />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
