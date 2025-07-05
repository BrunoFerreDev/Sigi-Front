import { defineStore } from "pinia";
import {
  getCursando,
  getAprobadas,
  getRegular,
} from "../services/alumnoService"; // Asegúrate de que el path es correcto

export const useAlumnoStore = defineStore("alumno", {
  state: () => ({
    cursando: [],
    aprobadas: [],
    regulares: [],
    loading: false, // <-- ¡Importante que sea booleano!
  }),
  actions: {
    async cargarAsignaturas() {
      this.loading = true; // Empieza a cargar
      try {
        const [cursando, aprobadas, regulares] = await Promise.all([
          getCursando(),
          getAprobadas(),
          getRegular(),
        ]);
        this.cursando = cursando.data;
        this.aprobadas = aprobadas.data;
        this.regulares = regulares.data;
      } catch (e) {
        console.error("Error cargando asignaturas.", e);
      } finally {
        this.loading = false; // Termina de cargar (sea éxito o error)
      }
    },
  },
});
