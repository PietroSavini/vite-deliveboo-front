<script>
export default {
    name: 'HomePageJumbo',
    data() {
        return {
           
        }

    }
}
</script>

<template>
<section class="hero">

    <div class="carousel">
      <h1 style="color:#ffff">ANTONIO FACCE ER CAROSELLO</h1>
    </div>
    <video autoplay loop muted>
        <source src="../assets/DeliveBoo_edited.mp4" type="video/mp4">
    </video>
</section>
</template>

<style scoped lang="scss">
.hero {
  height: 45vh;
  border: 1px solid black;
  position: relative;
  .carousel{
    border: 1px solid black;
    width: 50%;
    height: 200px;
    left: 50%;
    top: 35%;
    transform: translateX(-50%);
    position: absolute;
    z-index: 3;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>