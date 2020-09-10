import React from "react";
import MinimumLength from "./minimumLength";

function ModalBody(props) {
  const { onChangeHandler, createJobForm } = props;

  return (
    <form>
      <div className="form-group text-left">
        <input
          type="title"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          placeholder="Enter title"
          value={createJobForm.title}
          onChange={onChangeHandler}
        />
        <MinimumLength />
      </div>
      <div className="form-group text-left">
        <input
          type="description"
          className="form-control"
          id="description"
          placeholder="Password"
          value={createJobForm.description}
          onChange={onChangeHandler}
        />
        <MinimumLength />
      </div>
      <div className="form-group text-left">
        <input
          type="location"
          className="form-control"
          id="location"
          placeholder="Location"
          value={createJobForm.location}
          onChange={onChangeHandler}
        />
        <MinimumLength />
      </div>
    </form>
  );
}

export default ModalBody;
