import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/securityanalyst",
  headers: {
    "Content-type": "application/json"
  }
});