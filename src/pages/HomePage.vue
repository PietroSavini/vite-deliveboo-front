<script >
import { store } from "../store.js";
import HomePageJumbo from "../components/HomePageJumbo.vue";
import HomePageMain from "../components/HomePageMain.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import Pagination from "../components/Pagination.vue";
import AppHeader from "../components/AppHeader.vue";
import axios from "axios";

export default {
  name: "HomePage",
  props: {
    AppHeader
  },
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
  
  

  
  <HomePageMain v-if="restaurantsTypes.length === 0" />
  <section class="featured" v-if="restaurantsTypes.length > 0">
    <div class="background-extencion"></div> 
    <div class="container">
        <div class="section-title">
            <div class="img-absolute">
                <img src="https://res.cloudinary.com/glovoapp/f_auto,h_48,w_48,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight" alt="">
            </div>   
            <h5>in base alle categorie scelte</h5>
        </div>
        <div class="row">
            <div class="ms_col" v-for="restaurant in restaurantsTypes" :key="restaurant.name">
                <RestaurantCard :restaurant="restaurant" />
            </div>
            <Pagination v-if="restaurantsTypes.length > 0" class="mb-4" :currentPage="currentPage" :lastPage="lastPage" @changePage="getRestaurantsPage" />
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
.featured{
    background-color: $secondary_color;
    padding:1.5rem 0;
    position: relative;
    
    
    
    .background-extencion{
        
        position: absolute;
        left: 0px;
        right: 0px;
        top: -25px;
        height: 50px;
        border-radius: 100%;
        
        background-color: $secondary_color ;
    }
    .container{
        
        
        .section-title{
            color: black;
            @media screen and (max-width : 768px) {
                padding-left: 37%;
            }
            
            .img-absolute{
                position: relative;
            }
            
            img{
                position: absolute;
                z-index: 0;
                top: -15px;
                left: -50px;
                transform: rotate(25deg);
            }
            
            h5{
                position: relative;
                z-index: 1;
                font-weight: bold;
                
            }
        }
        .row{
            flex-wrap: wrap;
            justify-content: center;
            
            .ms_col{
                width: 400px;
                height: 220px;
                padding: 5px 5px;
            }
        }
    }
}
</style>
