<template>
  <div class="flex h-screen w-screen">
    <img src="/bg.jpg" alt="Background" class="w-1/2" />
    <div class="flex flex-col items-center w-1/2">
      <LoginForm />
    </div>
  </div>
</template>
<script setup>
import LoginForm from "../components/LoginForm.vue";
</script>
