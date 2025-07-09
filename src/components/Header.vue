<template>
  <header class="header text-xl font-b shadow py-4 mx-2">
    <div class="header-content flex items-center">
      {{ getPersona }}
      <form action="#" class="flex justify-between w-full items-center">
        <div class="hidden md:flex relative text-3xl pl-5 text-bold">
          {{ dynamicHeaderText }}
        </div>
        <!-- <div class="flex md:hidden">
          <select
            class="h-[40px] m:hidden text-md text-black border-gray-200 rounded-lg px-2"
          >
            <option>Bienvenido al sistema</option>
            <option @click.prevent="location.href = '/cursando'">
              Cursando
            </option>
            <option @click.prevent="location.href = '/materias-aprobadas'">
              Aprobadas
            </option>
            <option @click.prevent="location.href = '/regulares'">
              Regulares
            </option>
            <option @click.prevent="location.href = '/finales'">Finales</option>
            <option @click.prevent="location.href = '/titulo'">Titulo</option>
            <option @click.prevent="location.href = '/alumno-regular'">
              Alumno Regular
            </option>
            <option @click.prevent="location.href = '/plan-estudio'">
              Plan de Estudio
            </option>
            <option @click.prevent="location.href = '/cuenta'">Cuenta</option>
            <option @click.prevent="router.push('#')">Cerrar Sesion</option>
          </select>
        </div> -->
        <div class="flex flex-col text-md capitalize px-2" v-if="isLogin">
          <span>{{ persona.nombre + " " + persona.apellido }}</span>
          <span class="text-sm uppercase text-gray-200">{{
            persona.email
          }}</span>
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
  computed: {
    getPersona() {},
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
};
</script>
