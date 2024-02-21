import axios from "axios";

// const baseURL_Local = "http://localhost:3000/api/v1";
const baseURL_Prod = "https://api.kbe.uz/api/v1";

const api = axios.create({
  baseURL: baseURL_Prod,
});

api.interceptors.request.use(async (config) => {
  config.headers["x-api-key"] = `test-api-key`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error);

    if (error.code === "ERR_NETWORK") {
      localStorage.setItem("pathname_on_error", window.location.pathname);
      window.location.href = "/500";
    }
    return Promise.reject(error);
  }
);

export { api };
