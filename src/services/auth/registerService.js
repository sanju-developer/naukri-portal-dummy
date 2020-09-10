import { httpMethods } from "utils/constants/commonConstants";
import { apiEndpoints } from "api/endpoints";
import { api } from "api/api";

export const RegisterUserService = data => {
  return api(`${apiEndpoints.register}`, httpMethods.POST, data);
};
