<template>
  <div
    class="container mx-auto flex w-full max-h-[700px] overflow-x-auto"
    v-if="!alumnoStore.loading && alumnoStore.cursando.length > 0"
  >
    <table class="w-3/4 mx-auto mt-4 max-h-[300px] overflow-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Asignatura</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(curso, index) in alumnoStore.cursando" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ curso.materia }}</td>
          <td class="capitalize">{{ curso.condicion }}</td>
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
import { useAlumnoStore } from "@/stores/alumnoStore"; // ✅ Importación correcta
import { onMounted } from "vue"; // ✅ Importación correcta del hook onMounted

const alumnoStore = useAlumnoStore(); // ✅ Inicialización del store

onMounted(async () => {
  await alumnoStore.cargarAsignaturas(); // ✅ Llamada a la acción/método del store
});
</script>

