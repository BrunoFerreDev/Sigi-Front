import api_url from "./api.js";
export const login = (username, password, dni, email) => {
  return api_url.post("/auth/login", { username, password, dni, email });
};
