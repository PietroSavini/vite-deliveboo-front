<script >
import { store } from "../store.js";
import HomePageJumbo from "../components/HomePageJumbo.vue";

export default {
  name: "HomePage",
  data() {
    return {
      store,
    }
  },
  components: {
    HomePageJumbo,
    
  }
}

</script>

<template>
  <HomePageJumbo/>
</template>

<style lang="scss" scoped>

</style>
