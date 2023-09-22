import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a0fa868a7124e66b992cc45ba2b37ab",
  },
});
