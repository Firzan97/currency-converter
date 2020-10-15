<template>
  <div>
    <div class="body">
      <div id="app">
        <Navbar />
      </div>
      <div><ConverterMenu /></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ConverterMenu from "./components/ConverterMenu.vue";
export default {
  name: "App",
  components: {
    Navbar,
    ConverterMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  z-index: 1;
}
.body {
  background-image: url("./assets/images/16431.jpg");
  height: 100vh;
  z-index: -1;
}
</style>
