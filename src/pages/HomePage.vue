<script >
import { store } from "../store.js";
import HomePageJumbo from "../components/HomePageJumbo.vue";
import HomePageMain from "../components/HomePageMain.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import Pagination from "../components/Pagination.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      store,
      restaurantsTypes: [],
      currentPage: 0,
      lastPage: 0
    }
  },
  mounted() {
    this.getTypes()
  },
  methods: {
    getTypes() {
      axios.get(store.ApiTypesUrl).then((resp) => {
        this.store.types = resp.data.results
      });
    },
    getRestaurants($type_id) {
      this.populateTypesArray($type_id)
      const params = {};
      if (this.store.types_id.length > 0) {
        params.type_id = this.store.types_id
        axios.get(`${this.store.ApiRestaurantsUrl}`, { params }).then((resp) => {
          this.restaurantsTypes = resp.data.results.data;
          this.currentPage = resp.data.results.current_page;
          this.lastPage = resp.data.results.last_page;
        })
      } else {
        this.restaurantsTypes = [];
        this.currentPage = 0;
        this.lastPage = 0;

      }
    },
    getRestaurantsPage(page) {
      const params = {
        type_id: this.store.types_id,
        page: page
      };
      console.log(page);

      axios.get(`${this.store.ApiRestaurantsUrl}`, { params }).then((resp) => {
        this.restaurantsTypes = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        console.log('corrente', this.currentPage, this.lastPage);
      })
    },
    populateTypesArray(type_id) {
      let typesArray = this.store.types_id
      if (!typesArray.includes(type_id)) {
        typesArray.push(type_id)
        this.store.types_id = typesArray
      } else if (typesArray.includes(type_id)) {
        const index = typesArray.indexOf(type_id);
        typesArray.splice(index, 1);
        this.store.types_id = typesArray;
      }
    }
  },
  components: {
    HomePageJumbo,
    HomePageMain,
    RestaurantCard,
    Pagination,
  }


}

</script>

<template>
  <HomePageJumbo @getRestaurants="getRestaurants" />
  <div class="ms_col" v-for="restaurant in restaurantsTypes" :key="restaurant.name">
    <RestaurantCard :restaurant="restaurant" />
  </div>
  <Pagination v-if="restaurantsTypes.length > 0" class="mb-4" :currentPage="currentPage" :lastPage="lastPage"
    @changePage="getRestaurantsPage" />

  <HomePageMain class="mt-4" />
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
</style>
