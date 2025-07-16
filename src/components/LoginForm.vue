<template>
  <form class="form" >
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
</template>
