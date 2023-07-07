<script>
import { store } from "../store.js";
import CategoryLable from "./CategoryLable.vue";

export default {
  name: 'HomePageJumbo',
  data() {
    return {
      store,
    }
    
  },
  components:{
      CategoryLable
    }
}
</script>

<template>
  <section class="hero d-flex">

    <div class="cta">
      <div class="hero-hook-container">
        <h1 class="hero-hook">Fame?</h1>
      </div>
      <h1>Dicci di cosa hai voglia</h1>
      <div class="categories ">
        
        <div class="categories-lables d-flex justify-content-center ">
          
          <div class="row justify-content-center gy-2">
            <p class="text-center mb-2">categorie più richieste</p>
            <CategoryLable v-for="category in store.types" :category="category"/>
          </div>
        </div>
      </div>
    </div>
    <video autoplay loop muted>
      <source src="../assets/DeliveBoo_edited.mp4" type="video/mp4">
    </video>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/partials/root.scss" as *;

.hero {
  min-height: 500px;
  max-height: 800px;
  position: relative;
  padding-top: 200px;
  padding-bottom: 1rem;
  overflow-y: hidden;

  .cta {

    width: 70%;
    min-width: 280px;
    height: 290px;
    max-height: 290px;
    margin: 0 auto;
    text-align: center;
    .hero-hook-container{
      position: relative;
      width: 80%;
      margin: 0 auto;
      .hero-hook{
        font-family: 'Great Vibes', cursive;
        color: $primary_color;
        position: absolute;
        font-size: 5rem;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
    }
    h1 {
      position: relative;
      z-index: 3;
      font-weight: 800;
      color: #ffff;
      text-shadow: 1px 1px 2px rgb(0, 0, 0);
    }

    .categories {
      height: calc(100% - 3.10rem);
      padding: 1rem 1.5rem;
      max-height: 230px;

      p {
        color: #ffff;
        text-shadow: 1px 1px 2px rgb(0, 0, 0);
      }
    }
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
}</style>