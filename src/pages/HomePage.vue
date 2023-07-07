<script >
import { store } from "../store.js";
import HomePageJumbo from "../components/HomePageJumbo.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      store,
      variable : true,
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
      let typesArray = this.store.types_id
      if(!typesArray.includes($type_id)){
        typesArray.push($type_id)
        this.store.types_id = typesArray
      }else if(typesArray.includes($type_id)){
        const index = typesArray.indexOf($type_id);
        typesArray.splice(index, 1);
        this.store.types_id = typesArray;
      }
      console.log(this.store.types_id)
    }
  },
  components: {
    HomePageJumbo,
  }

}

</script>

<template>
  <HomePageJumbo @getRestaurants="getRestaurants"/>
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
</style>
