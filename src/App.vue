<template>
  <div class="app">
    <Navbar />
    <div class="body"></div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-image: url("./assets/images/16431.jpg");
  height: 100vh;
  z-index: -1;
}
.body {
}
</style>
