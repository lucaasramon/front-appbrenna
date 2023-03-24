import axios from "axios";

const api = axios.create({
  //DESENVOLVIMENTO:
  //baseURL: "http://localhost:8080",

  //PRODUÇÃO:
  baseURL: "https://back-rifa.vercel.app",
});

export default api;
