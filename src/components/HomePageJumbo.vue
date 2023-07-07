<script>
import { store } from "../store.js";

export default {
  name: 'HomePageJumbo',
  data() {
    return {
      store,
    }

  }
}
</script>

<template>
  <section class="hero d-flex">

    <div class="cta">
      <h1>Di cosa hai voglia oggi?</h1>
      <div class="categories ">
        
        <div class="categories-lables d-flex justify-content-center ">
          
          <div class="row justify-content-center gy-2">
            <p class="text-center mb-2">categorie più richieste</p>
            <div v-for="category in store.types" class="form-check form-check-tag">
              <input class="form-check-input ms_form-check" type="checkbox" value="" :id="`category-${category.id}`">
              <label class="form-check-label absolute" :for="`category-${category.id}`">
                {{ category.name }}
              </label>
            </div>
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
  padding-top: 140px;
  padding-bottom: 1rem;
  overflow-y: hidden;

  .cta {

    width: 70%;
    min-width: 280px;
    height: 290px;
    max-height: 290px;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-weight: 800;
      color: $primary_color;
      text-shadow: 1px 1px 2px rgb(0, 0, 0);
    }

    .categories {
      height: calc(100% - 3.10rem);
      padding: 1rem 1.5rem;
      max-height: 230px;

      p {
        color: $primary_color;
        text-shadow: 1px 1px 2px rgb(0, 0, 0);
      }

      .categories-lables {
        height: 80%;
        flex-wrap: wrap;
        align-items: center;

        .form-check-tag {
          position: relative;
          border-radius: 30px;
          width: 120px;
          height: 50px;
          padding: 0;
          margin-right: 5px;
          z-index: 2;
          

          .form-check-input:focus {
            box-shadow: none;
          }

          .form-check-input:checked[type=checkbox] {
            background-image: none;
            background-color: rgba(255, 165, 47, 1);
          }

          .form-check-input {
            background-color: rgba(255, 165, 47, 0.708);
            border: none;
            border-radius: 30px;
          }

          .absolute {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            font-weight: bold;
            font-size: 1srem;
            z-index: 1;
            cursor: pointer;

          }

          .ms_form-check {
            width: 120px;
            height: 50px;
            padding: 0;
            margin: 0;
            cursor: pointer;
          }
        }
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