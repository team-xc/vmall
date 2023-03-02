import axios from "axios";

export function requestMock(config) {
  const instance = axios.create({
    baseURL: "",
    timeout: 7000
  });

  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    console.log(error);
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, error => {
    console.log(error);
  });

  return instance(config);
}
