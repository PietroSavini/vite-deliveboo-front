<script>
import { store } from "../store";

export default {
    name: "RestaurantCard.vue",
    props: {
        restaurant: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        descriptionPreview() {
            if (!this.restaurant.description) {
                return "Nessuna descrizione"
            } else {
                return this.restaurant.description
            }
        }
    }
}
</script>

<template>
    <div class="ms_card">
        <div class="ms_card-img">
            <h1 class="restaurant-name">{{ restaurant.name }}</h1>
            <div class="restaurant-category">
                <p v-for="name in restaurant.types">{{ name.name }}</p>
            </div>
            <img :src="restaurant.image" class="" alt="Restaurant Image">
        </div>
        <div class="ms_card-body d-flex justify-content-between align-items-center">
            <div>
                <p class="text-start">{{ restaurant.address }}</p>
                <p>{{ descriptionPreview }}</p>
            </div>
            <div class="d-flex gap-1">
                <p><i class="fa-solid fa-burger fa-lg"></i></p>
                <p><i class="fa-solid fa-sushi fa-lg"></i></p>
                <p><i class="fa-solid fa-pizza-slice fa-lg"></i></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.ms_card {
    width: calc(100% - 10px);
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.200);

    &:hover {
        transition: 0.3s ease-in-out;
        box-shadow: 0 2px 4px coral;
        border: 0;
    }

    & img:hover {
            transform: scale(1.09);
        }

    .ms_card-img {
        position: relative;
        width: 100%;
        height: 80%;
        border-radius: 10px 10px 0 0;
        transition: 0.3s ease-in-out;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: .6;
            transition: .1s;
        }

        .restaurant-name {
            position: absolute;
            top: 50%;
            left: 50%;
            color: white;
            text-shadow: 15px 15px 15px rgba(0, 0, 0, 0.5);
            transform: translate(-50%, -50%) rotateX(10deg);
            font-weight: bold;
            text-align: center;
            z-index: 1;
        }

        .restaurant-category {
            top: 80%;
            transform: translate(-50%, -50%);
            position: absolute;
            left: 50%;
            padding: 1px 5px;
            border-radius: 5px;
            border: 1px solid black;
            background-color: $primary_color;
            text-align: center;

            p {
                font-weight: bold;
            }
        }
    }

    .ms_card-body {
        height: 20%;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.627);

        .restaurant-address {
            margin-top: 10px;
            color: #777777;
        }
    }
}
</style>