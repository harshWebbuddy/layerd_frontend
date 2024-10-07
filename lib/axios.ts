import a from "axios";

const axios = a.create({
  baseURL: "https://api.layerd.ai/api/v1/",
});

export default axios;
