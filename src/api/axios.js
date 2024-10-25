import axios from "axios";

const BASE_API_URL = "https://testmyaccount.azurewebsites.net/api/";
// for testing: ?? const BASE_API_URL = "http://localhost:8086/api/";
const IDENTITY_API_URL =
  "https://identityserver20231003125552.azurewebsites.net/api/";
const SIM_ACTIVATION_API_URL = "https://phoneboxapi.azurewebsites.net";

export const instance = axios.create({ baseURL: BASE_API_URL });
export const identityInstance = axios.create({ baseURL: IDENTITY_API_URL });
export const simActivationInstance = axios.create({
  baseURL: "https://phoneboxapi.azurewebsites.net", // 正确的 API 服务器
  timeout: 60000,
  headers: {
    apitoken: "75e142e9fd9decba5da64d86874ce5b6", // 加入apitoken
    client: "alpha", // 加入client
  },
});
