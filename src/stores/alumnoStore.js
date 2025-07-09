import { defineStore } from "pinia";
import {
  getCursando,
  getAprobadas,
  getRegular,
  getDisponibles,
} from "../services/alumnoService"; // Asegúrate de que el path es correcto

export const useAlumnoStore = defineStore("alumno", {
  state: () => ({
    cursando: [],
    aprobadas: [],
    regulares: [],
    disponibles: [],
    loading: false, // <-- ¡Importante que sea booleano!
  }),
  actions: {
    async cargarAsignaturas() {
      this.loading = true; // Empieza a cargar
      try {
        const [cursando, aprobadas, regulares, disponibles] = await Promise.all([
          getCursando(),
          getAprobadas(),
          getRegular(),
          getDisponibles(),
        ]);
        this.cursando = cursando.data;
        this.aprobadas = aprobadas.data;
        this.regulares = regulares.data;
        this.disponibles = disponibles.data;
        console.log(
          "Asignaturas cargadas:",
          this.cursando,
          this.aprobadas,
          this.regulares,
          this.disponibles
        );
        
      } catch (e) {
        console.error("Error cargando asignaturas.", e);
      } finally {
        this.loading = false; // Termina de cargar (sea éxito o error)
      }
    },
  },
});
