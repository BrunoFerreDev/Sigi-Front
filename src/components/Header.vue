<template>
  <header class="header text-xl font-b shadow py-4 mx-2">
    <div class="header-content flex items-center">
      <form action="#" class="flex justify-between w-full items-center">
        <div class="hidden md:flex relative text-3xl pl-5 text-bold">
          Bienvenido al sistema
        </div>
        <div class="flex md:hidden">
          <select
            class="h-[40px] m:hidden text-md text-black border-gray-200 rounded-lg px-2"
          >
            <option>Bienvenido al sistema</option>
            <option @click.prevent="location.href = '/cursando'">Cursando</option>
            <option @click.prevent="location.href = '/materias-aprobadas'">Aprobadas</option>
            <option @click.prevent="location.href = '/regulares'">Regulares</option>
            <option @click.prevent="location.href = '/finales'">Finales</option>
            <option @click.prevent="location.href = '/titulo'">Titulo</option>
            <option @click.prevent="location.href = '/alumno-regular'">Alumno Regular</option>
            <option @click.prevent="location.href = '/plan-estudio'">Plan de Estudio</option>
            <option @click.prevent="location.href = '/cuenta'">Cuenta</option>
            <option @click.prevent="router.push('#')" >Cerrar Sesion</option>
          </select>
        </div>
        <div class="flex flex-col text-md capitalize px-2" v-if="persona">
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
    };
  },
  created() {
    this.getPersona();
  },
  methods: {
    getPersona() {
      if (sessionStorage.getItem("token" == null)) return;
      else {
        let data = "";
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/personas/me",
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwt"),
            "Content-Type": "application/json",
          },
          data: data,
        };
        axios
          .request(config)
          .then((response) => {
            this.persona = response.data;
            console.log(this.persona);
            this.loginF = false;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.login = false;
          });
      }
    },
  },
};
</script>
