<template>
  <div
    class="max-w-8xl mx-auto w-full max-h-[750px] flex flex-col py-5 px-2 overflow-auto"
  >
    {{ materiasFiltradas }}
    <div class="flex justify-center items-center mx-auto" v-if="loading">
      <Loader />
    </div>
    <template v-else>
      <div class="btn-group flex gap-2 mx-auto items-center justify-center">
        <h2 class="text-2xl font-bold">Plan de Estudio y sus Condiciones</h2>
      </div>
      <div class="flex flex-col" v-if="materiasMostradas.length > 0">
        <table class="w-full mx-auto mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Asignatura</th>
              <th class="w-25">Para Cursar: Regularizada</th>
              <th>Para Rendir: Aprobada</th>
              <th>Tipo de Asignatura</th>
            </tr>
          </thead>
          <tbody
            v-if="materiasMostradas.length > 0"
            v-for="materia in materias"
            :key="materia.id"
            class=""
          >
            <tr class="uppercase text-sm">
              <td class="w-[70px]">{{ materia.id }}</td>
              <td>{{ materia.nombre }}</td>
              <td>
                {{
                  materia.correlativasCursar.length > 0
                    ? [...materia.correlativasCursar].join(" // ")
                    : "No contiene correlativas"
                }}
              </td>
              <td>
                {{
                  materia.correlativasRendir.length > 0
                    ? [...materia.correlativasRendir].join(" // ")
                    : "No contiene correlativas"
                }}
              </td>
              <td>{{ materia.tipo }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="6" class="bg-green-200">
                <span
                  class="hover:bg-green-600 cursor-pointer py-2 px-2 rounded-lg"
                  >Descargar Plan de Estudio</span
                >
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </template>
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
      anio: "0",
      materiasMostradas: [],
    };
  },
  onMounted() {
    this.planEstudio();
  },
  methods: {
    planEstudio() {
      this.loading = true;
      setTimeout(() => {
        axios
          .get("http://localhost:8080/asignaturas")
          .then((response) => {
            this.materias = response.data;
            this.materiasMostradas = response.data;
          })
          .finally(() => {
            this.loading = false;
          });
      }, 1000);
    },
  },
  computed: {
    materiasFiltradas() {
      this.planEstudio();
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
      } else if (this.anio == "0") {
        this.materias = this.materiasMostradas;
      }
    },
  },
};
</script>
<style>
table {
  @apply border-collapse;
  @apply text-sm;
  @apply border-black;
  @apply border-2;
  @apply text-center;
}
thead {
  @apply text-lg;
  @apply font-bold;
  @apply h-[65px];
}

tr,
td,
th {
  @apply border-b;
  @apply border-black;
  @apply border-2;
  @apply h-[50px];
}

.btn {
  @apply flex flex-row items-center bg-green-400 justify-center gap-4 h-8 rounded-lg w-[150px] hover:bg-slate-300;
}
</style>
<!-- <div class="btn-group flex gap-2 mx-auto items-center justify-center">
        <button class="btn" type="button" @click.prevent="filtrar('1')">Primer Año</button>
        <button class="btn" type="button" @click.prevent="filtrar('2')">Segundo Año</button>
        <button class="btn" type="button" @click.prevent="filtrar('3')">Tercer Año</button>
        <button class="btn" type="button" @click.prevent="filtrar('0')">Todas</button>
      </div> -->
