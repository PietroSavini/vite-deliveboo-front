<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {store} from "./store"


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss">
@use "./styles/style.scss";
@use "./styles/partials/root.scss" as *;

</style>
