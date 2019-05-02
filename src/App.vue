<template>
  <div id="app">
    <v-layout></v-layout>
  </div>
</template>

<script>
import Layout from './views/layout.vue'

export default {
  name: 'app',
  components: {
    'v-layout': Layout
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

</style>
