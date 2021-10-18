import axios from "axios";
const instance = axios.create({
  baseURL: "https://coded-miniproject-jam3ya-be.herokuapp.com",
});
export default instance;
