import React from "react";
import "./App.css";
import Routing from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routing />
      </ErrorBoundary>
    </div>
  );
}

export default App;
