<template>
  <div
    class="container mx-auto flex w-full max-h-[700px] overflow-x-auto"
    v-if="disponibles.length > 0"
  >
    <table class="w-3/4 mx-auto mt-4 max-h-[300px] overflow-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Asignatura</th>
          <th>Año</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          v-for="(asignatura, index) in disponibles"
          :key="index"
          class="hover:bg-gray-200"
        >
          <td>{{ asignatura.id }}</td>
          <td>{{ asignatura.asginatura }}</td>
          <td class="capitalize">{{ asignatura.anio }}</td>
          <td class="capitalize">{{ asignatura.tipo }}</td>
          <!-- <td>
            <button
              @click.prevent="inscribirse(asignatura.id)"
              class="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-lg"
            >
              Inscribirse
            </button>
          </td> -->
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6" class="bg-green-200">
            <span class="hover:bg-green-600 cursor-pointer py-2 px-2 rounded-lg"
              >Descargar Reporte</span
            >
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="flex justify-center items-center h-[300px] mx-auto" v-else>
    <p>No estas cursando ninguna asignatura</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Disponibles",
  data() {
    return {
      disponibles: [],
    };
  },
  mounted() {
    console.log(sessionStorage.getItem("jwt"));

    this.getDisponibles();
  },
  methods: {
    getDisponibles() {
      axios
        .get("http://localhost:8080/asignaturas/disponibles", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("jwt"),
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(sessionStorage.getItem("jwt"));
          this.disponibles = res.data;
        });
    },
    inscribirse(nombre) {
      console.log("inscribirse", nombre);
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url:
          "http://localhost:8080/alumno/curso/inscribir?asignatura=" + nombre,
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("jwt"),
        },
      };

      axios
        .request(config)
        .then((response) => {
          alert("Inscripcion exitosa");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
