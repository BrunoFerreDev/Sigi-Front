<template>
  <!-- From Uiverse.io by themrsami -->
  <div class="relative w-full sm:max-w-xl sm:mx-auto">
    <div
      class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
    >
      <div class="max-w-md mx-auto">
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="nombres"
              >Nombres</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              id="nombres"
              autocomplete="name"
              v-model="formData.nombre"
            />
          </div>
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="apellido"
              autocomplete="family-name"
              >Apellidos</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              id="apellido"
              v-model="formData.apellido"
            />
          </div>
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="dni"
              >DNI</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              id="dni"
              v-model="formData.dni"
            />
          </div>
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="email"
              >Email</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              autocomplete="email"
              v-model="formData.email"
            />
          </div>
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="username"
              >Username</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              autocomplete="username"
              v-model="formData.username"
            />
          </div>
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="dob"
              >Telefono</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text"
              id="dob"
              v-model="formData.telefono"
            />
          </div>
        </div>
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="password"
              >Contraseña</label
            >
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              autocomplete="new-password"
              v-model="formData.password"
            />
          </div>
        </div>
        <div class="mt-5">
          <button
            class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
            @click.prevent="handleRegister"
          >
            Registrar
          </button>
        </div>
        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <a
            class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            href="/"
            >have an account? Log in</a
          >
          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import RegisterForm from "../components/RegisterForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();
const formData = ref({
  username: "",
  password: "",
  nombre: "",
  apellido: "",
  dni: "",
  telefono: "",
  email: "",
  tipo: "ALUMNO",
});
const handleRegister = async () => {
  try {
    await authStore.RegistrarUsuario(formData.value);
    const response = await authStore.iniciarSesion(
      formData.value.username,
      formData.value.password,
      formData.value.dni,
      formData.value.email
    );
    router.push("/cuenta");
    // Redirigir o limpiar formulario, etc.
  } catch (error) {
    alert("Error en el registro: " + (error.message || "Desconocido"));
  }
};
</script>
