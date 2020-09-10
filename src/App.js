import React from "react";
import "./App.css";
import Routing from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  getUserRoleFromLocalStorage,
  getTokenFromLocalStorage
} from "utils/constants/commonConstants";
import CandidateDashboard from "screens/CandidateDashboard";
import RecruiterDashboard from "screens/RecruiterDashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          {JSON.parse(getUserRoleFromLocalStorage()) === 0 && (
            <>
              <RecruiterDashboard />
            </>
          )}
          {JSON.parse(getUserRoleFromLocalStorage()) === 1 && (
            <>
              <CandidateDashboard />
            </>
          )}
          {!getTokenFromLocalStorage() && <Routing />}
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
