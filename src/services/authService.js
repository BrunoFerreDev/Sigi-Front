import api_url from "./api.js";
export const login = (username, password, dni, email) => {
  return api_url.post("/auth/login", { username, password, dni, email });
};
// Nuevo método para registrar un usuario
// Nuevo método para registrar un usuario
export const register = (personaDTO) => {
  return api_url.post("/auth/register", personaDTO);
};