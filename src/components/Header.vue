<template>
  <header class="header text-xl font-b shadow py-4 mx-2">
    <div class="header-content flex items-center">
      <form action="#" class="flex justify-between w-full items-center">
        <div class="hidden md:flex relative text-3xl pl-5 text-bold">
          {{ dynamicHeaderText }}
        </div>
        <div
          class="flex flex-col text-md capitalize px-2"
          v-if="isLogin && persona.length > 0"
        >
          <span>{{ persona.nombre + " " + persona.apellido }}</span>
          <span class="text-sm uppercase text-gray-200">{{
            persona.email
          }}</span>
        </div>
        <div class="flex flex-col text-md capitalize px-2" v-else>
          <span>Usuario</span>
          <span class="text-sm uppercase text-gray-200">Sin sesión iniciada</span>
        </div>
      </form>
    </div>
  </header>
</template>
<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      persona: [],
      isLogin: false,
    };
  },
  created() {
    this.getPersona();
  },
  computed: {
    dynamicHeaderText() {
      // Mapea las rutas a los textos deseados
      switch (this.$route.path) {
        case "/":
          return "Bienvenido al sistema";
        case "/cuenta":
          return "Mi Cuenta";
        case "/materias-aprobadas":
          return "Asignaturas Aprobadas";
        case "/finales":
          return "Finales";
        case "/cursando":
          return "Asginaturas Cursando";
        case "/regulares":
          return "Asignaturas Regulares";
        case "/titulo":
          return "Trámite de Título";
        case "/alumno-regular":
          return "Estado de Alumno Regular";
        case "/plan-estudio":
          return "Plan de Estudio";
        default:
          return "Bienvenido"; // Un valor por defecto si la ruta no coincide
      }
    },
  },
  methods: {
    getPersona() {
      axios
        .get("http://localhost:8080/personas/me", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwt"),
          },
        })
        .then((res) => {
          this.persona = res.data;
          console.log(this.persona);
          this.isLogin = true;
        })
        .catch((error) => {})
        .finally(() => {
          this.isLogin = true;
        });
    },
  },
};
</script>
