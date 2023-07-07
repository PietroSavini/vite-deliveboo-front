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
    getRestaurants() {
      axios.get(`${store.ApiRestaurantsUrl}`).then((resp) => {
        console.log(resp);
        this.restaurants = resp.data.results.data;
      });
    },
    getTypes() {
      axios.get(`${store.ApiTypesUrl}`).then(resp => {
        console.log(resp);
        this.types = resp.data.results;
      });
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <section class="jumbo-section">
      <SectionJumbo :text="`Restaurants Page`" />

    </section>

    <main class="text-center my-5 ms_main">
      <div class="container-fluid my-3">
        <div class="row w-100 row-cols-5 g-3">
          <div class="col" v-for="restaurant in restaurants" :key="restaurant.name">
            <!-- <h1>ciao</h1> -->
            <RestaurantCard :restaurant="restaurant" />
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<style lang="scss">
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.wrapper {
  background-color: #ffc14578;
  height: 1800px;
}
</style>
