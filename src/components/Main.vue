<template>
  <main
    class="bg-slate-500 main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
  >
    <Header />
    <div class="main-content flex flex-col flex-grow px-2">
      <div class="flex flex-col flex-grow border-2 rounded mt-2">
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
