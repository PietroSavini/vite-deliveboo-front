<script>
export default {
    props:{
        restaurant:Object
    },
    name: "SectionJumbo",
}
</script>

<template>
    <div v-if="restaurant" class="jumbo-container">
        <img :src="restaurant.image" alt="">
    </div>
    <div v-else class="jumbo-container">
        <img src="../assets/RestaurantImage.jpeg" alt="">
    </div>
</template>

<style lang="scss" scoped>w
.jumbo-container {
    height: 300px;
    position: relative;
    
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        filter: blur(2px);
    }

}

</style>