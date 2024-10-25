import axios from "axios";

const BASE_API_URL = "https://testmyaccount.azurewebsites.net/api/";
// for testing: ?? const BASE_API_URL = "http://localhost:8086/api/";
const IDENTITY_API_URL =
  "https://identityserver20231003125552.azurewebsites.net/api/";

export const instance = axios.create({ baseURL: BASE_API_URL });
export const identityInstance = axios.create({ baseURL: IDENTITY_API_URL });
