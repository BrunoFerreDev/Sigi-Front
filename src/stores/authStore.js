// src > stores > useAuthStore.js
import { defineStore } from "pinia";
import { login, register } from "../services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: sessionStorage.getItem("jwt") || null, // Asegúrate que sea sessionStorage y no sessionStorage si lo deseas persistente
  }),
  actions: {
    async iniciarSesion(username, password, dni, email) {
      try {
        // ¡AGREGADO BLOQUE try/catch!
        // CORRECCIÓN: la llamada a login debe pasar todos los parámetros
        const response = await login(username, password, dni, email);

        this.token = response.data.jwt;
        this.user = response.data.user; // Asumiendo que el backend devuelve 'user'
        sessionStorage.setItem("jwt", this.token); // Si el token lo guardas en sessionStorage, que sea coherente
        "Inicio de sesión exitoso:", response.data; // Para depuración
      } catch (error) {
        console.error(
          "Error al iniciar sesión:",
          error.response ? error.response.data : error.message
        );
        throw error; // Es importante propagar el error para que el componente lo maneje
      }
    },
    async RegistrarUsuario(personaDTO) {
      try {
        const response = await register(personaDTO);
        // Aquí puedes manejar la respuesta del registro.
        // Por ejemplo, si el registro es exitoso, podrías iniciar sesión al usuario
        // o redirigirlo a una página de éxito. 
        sessionStorage.setItem("jwt", response.data.jwt);
        location.href = "/cuenta";
        console.log("Usuario registrado exitosamente:", response.data);
        return response.data; // O lo que necesites devolver
      } catch (error) {
        console.error(
          "Error al registrar usuario:",
          error.response?.data || error.message
        );
        throw error; // Propagar el error para que el componente que llama lo maneje
      }
    },
  },
});
