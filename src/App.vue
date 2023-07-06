<script >
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
  }
}

</script>

<template>
  <AppHeader />
  <router-view />
</template>

<style lang="scss">
@use "./styles/style.scss";
@use "./styles/partials/root.scss" as *;
</style>
