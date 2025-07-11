<template>
  <div
    class="flex flex-wrap justify-start gap-5 m-5 p-5 border border-gray-200"
  >
    <h3 class="text-2xl w-full font-semibold">Datos personales</h3>
    <section class="flex flex-col gap-5 text-lg w-1/2 py-3 capitalize">
      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">Nombres:</p>
        <p class="bg-gray-200 px-2 rounded-md min-w-44">{{ persona.nombre }}</p>
      </div>
      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">Apellidos:</p>
        <p class="bg-gray-200 px-2 rounded-md min-w-44">
          {{ persona.apellido }}
        </p>
      </div>
      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">D.N.I:</p>
        <p class="bg-gray-200 px-2 rounded-md min-w-44">{{ persona.dni }}</p>
      </div>

      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">F/N:</p>
        <p class="bg-gray-200 px-2 rounded-md min-w-44">1999/01/01</p>
      </div>
    </section>
    <section class="flex flex-col gap-5 text-lg w-2/2 py-3 capitalize">
      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">Usuario:</p>
        <p class="bg-gray-200 rounded-md min-w-44 px-2 lowercase">
          {{ persona.username }}
        </p>
      </div>
      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">Email:</p>
        <p class="bg-gray-200 rounded-md min-w-44 px-2 lowercase">
          {{ persona.email }}
        </p>
      </div>
      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">Telefono :</p>
        <p class="bg-gray-200 rounded-md min-w-44 px-2">
          {{ persona.telefono }}
        </p>
      </div>

      <div class="flex flex-row gap-5">
        <p class="mr-5 w-32">Estado:</p>
        <p
          :class="
            persona.estado
              ? 'bg-green-200 rounded-md min-w-44 px-2'
              : 'bg-red-200 rounded-md min-w-44 px-2'
          "
        >
          {{ persona.estado ? "Activo" : "Inactivo" }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cuenta",
  components: {},
  data() {
    return {
      persona: [],
    };
  },
  mounted() {
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
            JSON.stringify(response.data);
            this.persona = response.data;
            this.loginF = false;
          })
          .catch((error) => {
            error;
          })
          .finally(() => {
            sessionStorage.getItem("jwt");

            this.login = false;
          });
      }
    },
  },
};
</script>
