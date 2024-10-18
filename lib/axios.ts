"use client";
import a from "axios";

const axios = a.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/",
});

export default axios;
