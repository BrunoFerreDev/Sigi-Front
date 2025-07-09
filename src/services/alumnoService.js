import api_url from "./api.js";
export const getCursando = () =>
  api_url.get("/alumno/asignaturas/cursando", {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt"),
    },
  });
export const getRegular = () =>
  api_url.get("/alumno/asignaturas/regular", {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt"),
    },
  });
export const getAprobadas = () =>
  api_url.get("/alumno/asignaturas/aprobadas", {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt"),
    },
  });
export const getDisponibles = () =>
  api_url.get("/asignaturas/disponibles", {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("jwt"),
    },
  });
