import axios from "axios";
import { Message } from "element-ui";

// const baseURL = "http://192.168.0.32:9094/";
const baseURL = "http://47.241.183.80:10001/";
// const baseURL = "https://www.hnicae.com/";
// const baseURL = "http://localhost:8082/";
// create an axios instance
const service = axios.create({
  baseURL: baseURL // url = base url + request url
});

service.baseURL = baseURL;

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.code !== 200) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
export default service;
