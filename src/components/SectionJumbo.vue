<script>
export default {
    name: "SectionJumbo",
}
</script>

<template>
    <div class="jumbo-container">
        <img src="../assets/RestaurantImage.jpeg" alt="">
    </div>
</template>

<style lang="scss" scoped>
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
    }

}

</style>