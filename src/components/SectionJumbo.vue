<script>
export default {
    name: "SectionJumbo",
    props: {
        text: String,
    }
}
</script>

<template>
    <div class="jumbo-container text-center d-flex justify-content-center align-items-center">
        <div>
            <h2>Questo è il jumbo condiviso</h2>
            <h3>{{ text }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbo-container {
    height: 35vh;
    background-color: lightgrey;
}
</style>