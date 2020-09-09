import React from "react";
import { ErrorNames } from "./errorNames";
import { errorMessages } from "utils/constants/commonConstants";

function Error(props) {
  const { type } = props;
  const renderErrorMessages = () => {
    switch (type) {
      case ErrorNames.passwordAndConfirmPssword:
        return errorMessages.passwordAndConfirmPasswordIsNotEqual;

      case ErrorNames.emailNotvalid:
        return errorMessages.emailNotvalid;
    }
  };

  return <div className="error">{renderErrorMessages()}</div>;
}

export default Error;
