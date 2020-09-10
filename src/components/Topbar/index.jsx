import React from "react";
import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar-container d-flex justify-content-between">
      <h2>Vivek</h2>
      <button type="submit" className="btn btn-dark">
        Logout
      </button>
    </div>
  );
}

export default Topbar;
