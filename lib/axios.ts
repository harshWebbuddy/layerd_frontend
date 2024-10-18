import a from "axios";

const axios = a.create({
  baseURL: process.env.BACKEND_URL + "/api/v1/",
});

export default axios;
