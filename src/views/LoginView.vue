<template>
  <div class="flex flex-col justify-start gap-8 mx-auto items-center h-full">
    <h2 class="text-2xl font-bold mt-5">Iniciar Sesión</h2>
    <form class="form" @submit.prevent="iniciarSesion">
      <div class="flex-column">
        <label>Nombre de Usuario </label>
      </div>
      <div class="inputForm">
        <input
          placeholder="Ingrese su Nombre de Usuario"
          class="input"
          type="text"
          v-model="username"
        />
      </div>
      <div class="flex-column">
        <label>Email </label>
      </div>
      <div class="inputForm">
        <input
          placeholder="Ingrese su Email"
          class="input"
          type="text"
          v-model="email"
        />
      </div>
      <div class="flex-column">
        <label>D.N.I </label>
      </div>
      <div class="inputForm">
        <input
          placeholder="Ingrese su D.N.I"
          class="input"
          type="password"
          v-model="dni"
        />
      </div>
      <div class="flex-column">
        <label>Contraseña </label>
      </div>
      <div class="inputForm">
        <input
          placeholder="Ingrese su Contraseña"
          class="input"
          type="password"
          v-model="password"
        />
      </div>
      <button class="button-submit" type="submit">Iniciar Sesion</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
const router = useRouter();
const authStore = useAuthStore();

const username = ref("");
const password = ref("");
const dni = ref("");
const email = ref("");
const error = ref("");

const iniciarSesion = async () => {
  try {
    ("login");
    await authStore.iniciarSesion(
      username.value,
      password.value,
      dni.value,
      email.value
    );
  } catch (e) {
    error.value = "Credenciales incorrectas";
  } finally {
    location.reload();
    router.push("/cuenta");
  }
};
</script>
<style scoped>
/* From Uiverse.io by JohnnyCSilva */
.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
</style>
