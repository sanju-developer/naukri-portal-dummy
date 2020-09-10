export const registerFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  userRole: 0,
  skills: ""
};

export const API = {
  baseUrl: "https://jobs-api.squareboat.info/api/v1/"
};

export const loginFormField = {
  email: "",
  password: ""
};

export const CreateJobFormField = {
  title: "",
  description: "",
  location: ""
};

export const resetPasswordFormField = {
  password: "",
  confirmPassword: ""
};

export const UserRoles = [
  { id: "ur1", value: "Candidate" },
  { id: "ur2", value: "Recruiter" }
];

export const errorMessages = {
  passwordAndConfirmPasswordIsNotEqual:
    "Password and Confirm password are not equal",
  emailNotvalid: "Please enter a valid email",
  passwordLengthShouldBeMinimumOf6DigitMessage:
    "Password should be minimum of 6 digit"
};

export const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const httpMethods = {
  GET: "get",
  PUT: "put",
  POST: "post",
  DELETE: "delete",
  PATCH: "patch"
};

export const errorStatusCode = {
  internalServerErrorCode: 500
};

// Create queryparams
export function createQueryParams(queryParamString) {
  let params = {};
  if (typeof queryParamString === "string") {
    // case when we have queryParams in string format like we used in filter api where we used to send only parmater name without any key
    const queryParams = queryParamString.split("&");
    params = queryParams.reduce((accumulator, currValue) => {
      const keyValue = currValue.split("=");
      accumulator[keyValue[0]] = decodeURIComponent(keyValue[1]);
      return accumulator;
    }, {});
  } else return queryParamString;

  return params;
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem("token", token);
}
export function getTokenFromLocalStorage() {
  return localStorage.getItem("token");
}

export function setUserIdToLocalStorage(userId) {
  localStorage.setItem("userId", userId);
}
export function getUserIdFromLocalStorage() {
  return localStorage.getItem("userId");
}

export function setUserRoleToLocalStorage(userRole) {
  localStorage.setItem("userRole", userRole);
}

export function getUserRoleFromLocalStorage() {
  return localStorage.getItem("userRole");
}

export function clearLocalStorage() {
  localStorage.clear();
}
