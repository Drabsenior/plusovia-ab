import axios from "axios";

const instance = axios.create({
  baseURL: "https://kokebpension.herokuapp.com",
});

export default instance;
