<script >
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppFooter,
  }
}

</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/style.scss" as *;
@use "./styles/partials/root.scss" as *;
</style>
