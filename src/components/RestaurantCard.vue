<script>
import { store } from "../store";

export default {
    name: "RestaurantCard",
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
    <router-link :to="{ name: 'restaurant-detail', params: { id: restaurant.id, restaurant: restaurant } }">
        <div class="ms_card d-flex">
            <div class="ms_card-img">
                <div class="overlay"></div>
                <h1 class="restaurant-name">{{ restaurant.name }}</h1>
                <div class="restaurant-category">
                    <p v-for="name in restaurant.types">{{ name.name }}</p>
                </div>
                <img v-if="restaurant.image" :src="store.method.getImgPath(restaurant.image)" class=""
                    alt="Restaurant Image">
            </div>

            <div class="ms_card-body d-flex justify-content-between align-items-center">
                <div>
                    <p class="text-start">{{ restaurant.address }}</p>
                    <p>{{ descriptionPreview }}</p>
                </div>
                <div class="d-flex gap-1">
                    <p><i class="fa-solid fa-burger fa-lg"></i></p>
                    <p><i class="fa-solid fa-pizza-slice fa-lg"></i></p>
                    <p><i class="fa-solid fa-utensils fa-lg"></i></p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.ms_card {
    width: 100%;
    flex-direction: column;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.200);
    cursor: pointer;
    transition: 200ms;

    &:hover img {
        transform: scale(1.09);

    }

    .ms_card-img {
        position: relative;
        height: 70%;
        border-radius: 10px 10px 0 0;
        transition: 0.3s ease-in-out;
        overflow: hidden;

        .overlay {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
            background-color: rgba($color: #232323, $alpha: .6);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            transition: .3s;
        }

        .restaurant-name {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            color: white;
            text-shadow: 15px 15px 15px rgba(0, 0, 0, 0.5);
            transform: rotateX(10deg);
            font-weight: bold;
            text-align: center;
            z-index: 4;
        }

        .restaurant-category {
            top: 80%;
            transform: translate(-50%, -50%);
            position: absolute;
            left: 50%;
            text-align: center;
            display: flex;
            z-index: 4;

            p {
                border: 1px solid black;
                background-color: $primary_color;
                font-weight: bold;
                border: 1px solid black;
                border-radius: 5px;
                padding: 1px 5px;
                margin: 2px;
            }
        }
    }

    .ms_card-body {
        height: 30%;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.627);

        .restaurant-address {
            margin-top: 10px;
            color: #777777;
        }
    }
}
</style>