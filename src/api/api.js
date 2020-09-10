import axios from "axios";
import { API, getTokenFromLocalStorage } from "utils/constants/commonConstants";

export const api = (endpoint, apiMethod, data, queryParams) => {
  const apiParameter = {
    method: apiMethod,
    url: API.baseUrl + endpoint
  };
  // Conditinal check for sending data/queryparams in apiParameter
  if (data !== null) {
    apiParameter.data = data;
  }
  if (queryParams !== undefined) {
    apiParameter.params = queryParams;
  }

  if (getTokenFromLocalStorage()) {
    apiParameter.headers = {
      Authorization: `${getTokenFromLocalStorage()}`,
      withCredentials: true
    };
  }

  return axiosApi(apiParameter);
};

function axiosApi(content) {
  return axios(content).then(handleResponse);
}

function handleResponse(response) {
  const type = response.headers["content-type"];
  let res;
  if (type === "application/json") {
    res = response;
  }
  return res ?? response;
}
