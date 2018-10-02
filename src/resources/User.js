import axios from "axios";

import headers from "./headers";

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_PATH}/users`,
  headers
});
