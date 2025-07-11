import { createRouter, createWebHistory } from "vue-router";
import Cuenta from "./views/Cuenta.vue";
import Cursando from "./views/Cursando.vue";
import AlumnoRegular from "./views/AlumnoRegular.vue";
import Regulares from "./views/Regulares.vue";
import Finales from "./views/Finales.vue";
import MateriasAprobadas from "./views/MateriasAprobadas.vue";
import Titulo from "./views/Titulo.vue";
import PlanEstudio from "./views/PlanEstudio.vue";
import LoginView from "./views/LoginView.vue";
import Disponibles from "./views/Disponibles.vue"; 
import RegisterView from "./views/RegisterView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginView },
    { path: "/cuenta", component: Cuenta },
    { path: "/materias-aprobadas", component: MateriasAprobadas },
    { path: "/finales", component: Finales },
    { path: "/cursando", component: Cursando },
    { path: "/regulares", component: Regulares },
    { path: "/titulo", component: Titulo },
    { path: "/alumno-regular", component: AlumnoRegular },
    { path: "/cuenta", component: Cuenta },
    { path: "/plan-estudio", component: PlanEstudio },
    { path: "/disponibles", component: Disponibles },
    { path: "/register", component: RegisterView },
  ],
});
export default router;
