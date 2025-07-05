<template>
  <div class="container mx-auto mt-5 max-w-6xl">
    {{ materiasFiltradas }}
    <div class="flex justify-center items-center mx-auto" v-if="loading">
      <Loader />
    </div>
    <table v-else class="w-full mx-auto mt-4 max-h-[300px">
      <caption class="text-center text-xl mb-5 font-bold">
        Plan de Estudio
      </caption>
      <thead>
        <tr>
          <select name="anio" id="anio" class="p-2 mx-2 mt-2 bg-gray-100 rounded-md" v-model="anio">
            <option value="1">1° Año</option>
            <option value="2">2° Año</option>
            <option value="3">3° Año</option>
          </select>
          <th >Materia</th>
          <th class="w-25">Para Cursar: Regularizada</th>
          <th>Para Rendir: Aprobada</th>
          <th>Tipo de Materia</th>
        </tr>
      </thead>
      <tbody v-if="materias.length > 0" v-for="materia in materias">
        <tr class="uppercase text-sm">
          <td class="w-[70px]">{{ materia.anio }}</td>
          <td>{{ materia.nombre }}</td>
          <td>{{ materia.correlativasRegular }}</td>
          <td>{{ materia.correlativasRendir }}</td>
          <td>{{ materia.tipo }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th colspan="6" class="bg-green-200">
            <span class="hover:bg-green-600 cursor-pointer py-2 px-2 rounded-lg"
              >Descargar Plan de Estudio</span
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
  name: "PlanEstudio",
  components: {
    Loader,
  },
  data() {
    return {
      materias: [],
      loading: false,
      anio: "1",
      materiasMostradas: [],
    };
  },
  created() {
    this.planEstudio();
  },
  methods: {
    planEstudio() {
      this.loading = true;
      setTimeout(() => {
        axios
          .get("http://localhost:8080/asignatura")
          .then((response) => {
            this.materias = response.data;
            this.materiasMostradas = response.data;
            console.log(this.materiasMostradas);
          })
          .finally(() => {
            this.loading = false;
          });
      }, 1000);
    },
  },
  computed: {
    materiasFiltradas() {
      if (this.anio == "1") {
        let filtro = this.materiasMostradas.filter(
          (materia) => materia.anio == 1
        );
        this.materias = filtro;
      } else if (this.anio == "2") {
        let filtro = this.materiasMostradas.filter(
          (materia) => materia.anio == 2
        );
        this.materias = filtro;
      } else if (this.anio == "3") {
        let filtro = this.materiasMostradas.filter(
          (materia) => materia.anio == 3
        );
        this.materias = filtro;
      }
    },
  },
};
</script>
