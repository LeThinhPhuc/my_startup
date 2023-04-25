import axios from "axios";
import axiosInstance from "./axiosInstance";
import {JOBS_ENDPOINT, APPLY_ENDPOINT} from "../constants";

export const dataServices = {
  getData: async (url) => {
    return axios(url).then(response => response.data);
  },
  postApply: (userInfo) => {
    return axiosInstance.post(APPLY_ENDPOINT, userInfo);
  },
  postJob: (jobInfo) => {
    return axiosInstance.post(JOBS_ENDPOINT, jobInfo);
  }
}
