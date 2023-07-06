<script >
import {store} from "./store.js";
import AppHeader from "./components/AppHeader.vue";

export default{
  data(){
    return{
      store,
    }
  },
  components:{
    AppHeader,

  }
}

</script>

<template>
<AppHeader/>
 <section class="hero">
    <video autoplay loop muted >
      
      <source src="./assets/DeliveBoo_edited.mp4" type="video/mp4">
    </video>
 </section>
</template>

<style lang="scss">
@use "./styles/style.scss";
@use "./styles/partials/root.scss" as *;

.hero{
  height: 45vh;
  border: 1px solid black;
  position: relative;
  video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
