<script >
// import axios from "axios";
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
    };
  },
//   mounted() {
//     this.getRestaurants();
//   },
//   methods: {
//     getRestaurants() {
//         axios.get(`${store.ApiRestaurantsUrl}`).then((resp) => {
//             console.log(resp);
//             // this.restaurants
//         });
//     }
//   }
}
</script>

<template>
    <section class="jumbo-section">
        <SectionJumbo :text="`Restaurants Page`"/>

        <div class="text-center my-5">
            <RestaurantCard />
        </div>
    </section>

    <main>

    </main>

</template>

<style lang="scss">

</style>
