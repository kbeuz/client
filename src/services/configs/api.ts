import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
