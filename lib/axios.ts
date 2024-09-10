import a from "axios";

const axios = a.create({
  baseURL: "http://localhost:5000/api/v1/",
});

export default axios;
