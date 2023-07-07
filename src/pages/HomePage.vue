<script >
import { store } from "../store.js";
import HomePageJumbo from "../components/HomePageJumbo.vue";
import HomePageMain from "../components/HomePageMain.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      store,
      restaurantsTypes : [],
    }
  },
  mounted(){
    this.getTypes()
  },
  methods:{
    getTypes(){
      axios.get(store.ApiTypesUrl).then((resp)=>{
        this.store.types = resp.data.results
      });
    },
    getRestaurants($type_id){
      this.populateTypesArray($type_id)
      const params = {};
      if(this.store.types_id.length > 0 ){
        params.type_id = this.store.types_id
        axios.get(`${this.store.ApiRestaurantsUrl}`,{params}).then((resp)=>{
          this.restaurantsTypes = resp.data.results.data
        })
        
      }
    },
    populateTypesArray(type_id){
      let typesArray = this.store.types_id
      if(!typesArray.includes(type_id)){
        typesArray.push(type_id)
        this.store.types_id = typesArray
      }else if(typesArray.includes(type_id)){
        const index = typesArray.indexOf(type_id);
        typesArray.splice(index, 1);
        this.store.types_id = typesArray;
      }
    }
  },
  components: {
    HomePageJumbo,
    HomePageMain,
  }
  

}

</script>

<template>
  <HomePageJumbo @getRestaurants="getRestaurants"/>
  <HomePageMain/>
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
</style>
