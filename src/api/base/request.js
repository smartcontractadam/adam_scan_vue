import axios from "axios";
import { Message } from "element-ui";

// const baseURL = "http://39.104.78.79:8081/";
// const baseURL = "http://47.241.183.80:10001/";
const baseURL = "https://scan.adamoracle.io/";
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
    //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
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

    if (res.errorCode !== 1000 && res.errorCode != 2001) {
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
