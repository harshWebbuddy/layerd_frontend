"use client";
import a from "axios";

const BASE_URL = process.env.BACKEND_URL;

const axios = a.create({
  baseURL: BASE_URL + "/api/v1/",
});

export default axios;
