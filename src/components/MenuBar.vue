<template>
  <aside
    class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500"
  >
    <div class="sidebar-header flex items-center justify-center py-4">
      <div class="inline-flex justify-evenly items-center w-full">
        <IconDeviceLaptop size="50" />
        <span class="bg-transparent">C.E.P N-62</span>
      </div>
    </div>
    <div class="sidebar-content flex flex-col justify-start px-4">
      <span class="font-bold">Opciones</span>
      <ul class="flex flex-col items-start justify-start mx-2 gap-2 my-3">
        <li><a href="/cursando">Cursando Actualmente</a></li>
        <li><a href="/materias-aprobadas">Asignaturas Aprobadas</a></li>
        <li><a href="/regulares">Asignaturas Regulares</a></li>
        <li><a href="/finales">Inscripciones a Finales</a></li>
      </ul>
      <span class="font-bold">Constancias</span>
      <ul class="flex flex-col items-start justify-start mx-2 gap-5 my-3">
        <li><a href="/titulo">Titulo en Tramite</a></li>
        <li><a href="/alumno-regular">Alumno Regular</a></li>
        <li><a href="/plan-estudio">Plan de Estudio</a></li>
      </ul>
      <span class="font-bold">Cuenta</span>
      <ul class="flex flex-col items-start justify-start mx-2 gap-3 my-3">
        <li>
          <a class="inline-flex items-center gap-2 w-full" href="/cuenta"
            ><IconUserFilled />Perfil</a
          >
        </li>
        <li>
          <a class="inline-flex items-center gap-2 w-full" href="#">
            <IconSettingsFilled />Configuración</a
          >
        </li>
        <li>
          <a
            @click.prevent="logout"
            class="inline-flex items-center gap-2 w-full"
            href="#"
          >
            <IconLogout2 />Cerrar sesión</a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import {
  IconDeviceLaptop,
  IconUserFilled,
  IconSettingsFilled,
  IconLogout2,
} from "@tabler/icons-vue";
export default {
  name: "MenuBar",
  components: {
    IconDeviceLaptop,
    IconUserFilled,
    IconSettingsFilled,
    IconLogout2,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      window.location.href = "/";
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
span {
  @apply font-bold text-lg;
}
a {
  @apply flex flex-row items-center bg-slate-100 h-8 px-3 rounded-lg w-[200px] hover:bg-slate-300;
}
</style>
