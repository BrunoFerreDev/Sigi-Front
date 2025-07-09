<template>
  <main
    class="min-h-full bg-slate-500 main flex flex-col w-full md:ml-0 transition-all duration-150 ease-in"
  >
    <Header />
    <div class="main-content flex flex-col px-2 h-full">
      <div class=" flex flex-col flex-grow border-2 rounded mt-2">
        <router-view></router-view>
      </div>
    </div>
    <FooterC />
  </main>
</template>

<script>
import FooterC from "./Footer.vue";
import Header from "./Header.vue";
export default {
  name: "Main",
  components: {
    FooterC,
    Header,
  },
};
</script>
