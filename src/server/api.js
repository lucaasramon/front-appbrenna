import axios from "axios";
require("dotenv").config();

const api = axios.create({
  //DESENVOLVIMENTO:
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default api;
