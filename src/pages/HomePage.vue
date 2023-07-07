<script >
import { store } from "../store.js";
import HomePageJumbo from "../components/HomePageJumbo.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      store,
    }
  },
  mounted(){
    this.getTypes()
  },
  methods:{
    getTypes(){
      axios.get(store.ApiTypesUrl).then((resp)=>{
        this.store.types = resp.data.results
        console.log(this.store.types)
      })
    }
  },
  components: {
    HomePageJumbo,
  }

}

</script>

<template>
  <HomePageJumbo/>
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
</style>
