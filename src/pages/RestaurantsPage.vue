<script >
import axios from "axios";
import { store } from "../store.js";
import SectionJumbo from "../components/SectionJumbo.vue";
import RestaurantCard from "../components/RestaurantCard.vue";

export default {
  name: "RestaurantsPage",
  components: {
    SectionJumbo,
    RestaurantCard,
  },
  data() {
    return {
      store,
      restaurants: [],
      currentPage: 1,
      lastPage: null,
      allRestaurants: 0,
      loading: false,
      types: [],

    };
  },
  mounted() {
    this.getRestaurants();
    this.getTypes();
  },
  methods: {
    getTypes() {
      axios.get(`${store.ApiTypesUrl}`).then(resp => {
        console.log(resp);
        this.types = resp.data.results;
      });
    },
    getRestaurants() {
      axios.get(`${store.ApiRestaurantsUrl}`).then((resp) => {
        console.log(resp);
        this.restaurants = resp.data.results.data;
      });
    }
  }
}
</script>

<template>
  <div class="wrapper ">

    <!-- Jumbo Section -->
    <section class="jumbo-section">
      <SectionJumbo :text="`Restaurants Page`" />
    </section>
    <!-- / Jumbo Section -->

    <section v-if="!loading">
      <main class="text-center my-5 ms_main">
        <div class="container-fluid my-3">
          <div class="row row-cols-5 g-3 justify-content-center flex-wrap">
            <div class="ms_col" v-for="restaurant in restaurants" :key="restaurant.name">
              <RestaurantCard :restaurant="restaurant" />
            </div>
          </div>
        </div>
      </main>
    </section>

    <section v-else>
      <h1 class="">Caricamento...</h1>
    </section>


  </div>
</template>

<style lang="scss" scoped>
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.wrapper {
  background-color: #ffc14578;
  height: 1800px;

  .ms_main {

    .row {
      width: 100%;

      .ms_col {
        width: 400px;
      }
    }
  }
}
</style>
