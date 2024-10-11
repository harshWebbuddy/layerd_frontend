import a from "axios";

const axios = a.create({
  baseURL: "https://layered-backend.onrender.com/api/v1/",
});

export default axios;
