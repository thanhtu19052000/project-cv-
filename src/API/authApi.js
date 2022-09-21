import axiosClient from "./axiosClient";

export const authApi = {
  Register(regis) {
    console.log(regis);
    const res = axiosClient.post("/register", regis);
    return res;
  },
  getData() {
    const res = axiosClient.get("users?page=2");
    return res;
  },
};
