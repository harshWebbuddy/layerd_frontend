import a from "axios";

const axios = a.create({
  baseURL: process.env.BACKEND_URL,
});

export default axios;
