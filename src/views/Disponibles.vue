<template>
  <div
    class="container mx-auto flex w-full max-h-[700px] overflow-x-auto"
    v-if="!alumnoStore.loading && alumnoStore.disponibles.length > 0"
  >
    <table class="w-3/4 mx-auto mt-4 max-h-[300px] overflow-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Asignatura</th>
          <th>Año</th>
          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody class="text-center ">
        <tr v-for="(asignatura, index) in alumnoStore.disponibles" :key="index" class="hover:bg-gray-200">
          <td>{{ index + 1 }}</td>
          <td>{{ asignatura.asginatura }}</td>
          <td class="capitalize">{{ asignatura.anio }}</td>
          <td class="capitalize">{{ asignatura.tipo }}</td>
          <td>
            <button
              class="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-lg"
            >
              Inscribirse
            </button>
          </td>
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
<script setup>
import { useAlumnoStore } from "@/stores/alumnoStore";
import { onMounted } from "vue";
const alumnoStore = useAlumnoStore();

onMounted(async () => {
  console.log(await alumnoStore.cargarAsignaturas());

  const asignaturas = await alumnoStore.cargarAsignaturas();
});
</script>
