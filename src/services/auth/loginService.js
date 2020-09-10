import { httpMethods } from "utils/constants/commonConstants";
import { apiEndpoints } from "api/endpoints";
import { api } from "api/api";

export const LoginUserService = data => {
  return api(`${apiEndpoints.login}`, httpMethods.POST, data);
};
