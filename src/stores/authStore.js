// src > stores > useAuthStore.js
import { defineStore } from "pinia";
import { login } from "../services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: sessionStorage.getItem("jwt") || null, // Asegúrate que sea localStorage y no sessionStorage si lo deseas persistente
  }),
  actions: {
    async iniciarSesion(username, password, dni, email) {
      try {
        // ¡AGREGADO BLOQUE try/catch!
        // CORRECCIÓN: la llamada a login debe pasar todos los parámetros
        const response = await login(username, password, dni, email);

        this.token = response.data.jwt;
        this.user = response.data.user; // Asumiendo que el backend devuelve 'user'
        sessionStorage.setItem("jwt", this.token); // Si el token lo guardas en localStorage, que sea coherente
        console.log("Inicio de sesión exitoso:", response.data); // Para depuración
      } catch (error) {
        console.error(
          "Error al iniciar sesión:",
          error.response ? error.response.data : error.message
        );
        throw error; // Es importante propagar el error para que el componente lo maneje
      }
    },
    cerrarSesion() {
      this.user = null;
      this.token = null;
      sessionStorage.removeItem("jwt");
    },
  },
});
