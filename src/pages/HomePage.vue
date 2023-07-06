<script >
import { store } from "../store.js";

export default {
  name: "HomePage",
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <section class="hero">
    <video autoplay loop muted>
      <source src="./assets/DeliveBoo_edited.mp4" type="video/mp4">
    </video>
  </section>
</template>

<style lang="scss">
.hero {
  height: 45vh;
  border: 1px solid black;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
