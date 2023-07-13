<script>
export default {
    props:{
        restaurant:Object
    },
    name: "SectionJumbo",
}
</script>

<template>
    <div v-if="restaurant && restaurant.image" class="jumbo-container">
        <img :src="restaurant.image" alt="">
    </div>
    <div v-else class="jumbo-container">
        <img src="../assets/RestaurantImage.jpeg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.jumbo-container {
    height: 300px;
    position: relative;
    
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
        
    }

}

</style>