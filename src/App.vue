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
      
      <source src="./assets/mixkit-donuts-with-various-types-of-icing-in-a-close-up-44096.mp4" type="video/mp4">
    </video>
 </section>
</template>

<style lang="scss">
@use "./styles/style.scss";
@use "./styles/partials/root.scss" as *;

.hero{
  height: 600px;
  border: 1px solid black;
}

</style>
