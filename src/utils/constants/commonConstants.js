export const registerFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  userRole: 0,
  skills: ""
};

export const loginFormField = {
  email: "",
  password: ""
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
  emailNotvalid: "Please enter a valid email"
};

export const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
