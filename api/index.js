import axios from "axios";

axios.defaults.baseURL = "http://handicap-api.onwardwebdevelopment.com/";
axios.defaults.timeout = 30000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Platform-Domain"] = "staging.drhandicap.com";
axios.defaults.withCredentials = false;

export const LoginRequest = async (email, password) => {
  const data = { session: { email, password } };
  return await axios.post("auth/sign_in", data);
};
