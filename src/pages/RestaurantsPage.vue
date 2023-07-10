<script >
import axios from "axios";
import { store } from "../store.js";
import SectionJumbo from "../components/SectionJumbo.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "RestaurantsPage",
  components: {
    SectionJumbo,
    RestaurantCard,
    Pagination
  },
  data() {
    return {
      store,
      restaurants: [],
      currentPage: 1,
      lastPage: null,
      loading: false,
      types: [],
      allRestaurants: 0

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
    getRestaurants(pageNumber) {
      this.loading = true;
      const params = {
        page: pageNumber
      }

      axios.get(`${store.ApiRestaurantsUrl}`, { params }).then((resp) => {
        this.restaurants = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.allRestaurants = resp.data.results.total;
      }).finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>

<template>
<SectionJumbo />
<section class="restaurants">
  <div class="wrapper ">
    <main v-if="!loading" class="text-center ms_main">
      <div class="container-fluid">

        <div class="text-end">
          <h5>Ristoranti trovati: <span class="restaurant-num">{{ allRestaurants }}</span></h5>
        </div>
        
        <div class="row row-cols-5 g-3 justify-content-center flex-wrap">

          <!-- Card Section -->
          <div class="ms_col" v-for="restaurant in restaurants" :key="restaurant.name">
            <RestaurantCard :restaurant="restaurant" />
          </div>
        </div>


        <!-- Pagination -->
        <Pagination :currentPage="currentPage" :lastPage="lastPage" @changePage="getRestaurants" />
      </div>
    </main>
    
  
    <section v-else>
      <span class="text-center ms_loader"></span>
    </section>
  
  
  </div>

</section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
.restaurants{
  background-color: $secondary_color;
  min-height: 800px;
  .wrapper {
    
    padding-bottom: 10px;
  
    .ms_main {
  
      .row {
        width: 100%;
  
        .ms_col {
          width: 400px;
        }
      }
    }
  
    .ms_loader {
      width: 48px;
      height: 48px;
      display: block;
      margin: 20px auto;
      box-sizing: border-box;
      position: relative;
    }
  
    .ms_loader::after {
      content: '';
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      left: 0;
      bottom: 0;
      position: absolute;
      border-radius: 50% 50% 0;
      border: 15px solid $green_deli;
      transform: rotate(45deg) translate(0, 0);
      box-sizing: border-box;
      animation: animMarker 0.4s ease-in-out infinite alternate;
    }
  
    .ms_loader::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 150%;
      width: 24px;
      height: 4px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      animation: animShadow 0.4s ease-in-out infinite alternate;
    }
  
    @keyframes animMarker {
      0% {
        transform: rotate(45deg) translate(5px, 5px);
      }
  
      100% {
        transform: rotate(45deg) translate(-5px, -5px);
      }
    }
  
    @keyframes animShadow {
      0% {
        transform: scale(0.5);
      }
  
      100% {
        transform: scale(1);
      }
    }
  
  
  }
}
</style>
