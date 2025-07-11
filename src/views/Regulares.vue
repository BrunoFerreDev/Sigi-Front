<template>
  <div class="container mx-auto mt-5 max-h-[700px] overflow-x-auto">
    <div class="flex gap-4 justify-center items-center mx-auto" v-if="loading">
      <Loader />
    </div>
    <table v-else class="w-3/4 mx-auto max-h-[300px]">
      <thead>
        <tr>
          <th>#</th>
          <th>Asignatura</th>
          <th>Estado</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody
        v-if="asignaturas.length > 0"
        v-for="(asignatura, index) in asignaturas"
        class="hover:bg-gray-200 uppercase"
      >
        <tr class="uppercase">
          <td>{{ index + 1 }}</td>
          <td>{{ asignatura.materia }}</td>
          <td>{{ asignatura.condicion }}</td>
          <td>{{ asignatura.nota }}</td>
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
  name: "Regulares",
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
    this.condicional();
  },
  methods: {
    condicional() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/alumno/asignaturas/regular",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("jwt"),
        },
      };

      this.loading = true;
      setTimeout(() => {
        axios
          .request(config)
          .then((response) => {
            this.asignaturas = response.data;
          })
          .catch((error) => {})
          .finally(() => {
            this.loading = false;
          });
      }, 2000); // El tiempo de delay está en milisegundos, aquí 2000ms = 2 segundos
    },
  },
};
</script>
