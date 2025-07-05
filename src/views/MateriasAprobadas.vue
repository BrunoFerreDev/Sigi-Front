<template>
  <div class="container mx-auto mt-5 flex justify-center">
    <div
      class="flex justify-center items-center h-[300px] mx-auto"
      v-if="loading"
    >
      <Loader />
    </div>
    <table v-else class="w-3/4 mb-3">
      <caption class="text-center text-xl mb-5 font-bold">
        Materias Aprobadas
      </caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Materia</th>
          <th class="w-25">Calificaciónes</th>
          <th>Condición</th>
        </tr>
      </thead>
      <tbody
        v-if="asignaturas.length > 0"
        v-for="(asignatura, index) in asignaturas"
        :key="asignatura.id"
      >
        <tr class="uppercase text-lg">
          <td>{{ index + 1 }}</td>
          <td>{{ asignatura.materia }}</td>
          <td>{{ asignatura.nota }}</td>
          <td>Aprobada</td>
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
</template>
<script>
import axios from "axios";
import Loader from "../components/Loader.vue";
export default {
  name: "MateriasAprobadas",
  components: {
    Loader,
  },
  data() {
    return {
      asignaturas: [],
      loading: false,
    };
  },
  created() {
    this.aprobado();
  },
  methods: {
    aprobado() {
      this.loading = true;

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/alumno/asignaturas/aprobadas",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("jwt"),
        },
      };
      setTimeout(() => {
        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.asignaturas = response.data;
            console.log(this.asignaturas);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }, 2000);
    },
  },
};
</script>
