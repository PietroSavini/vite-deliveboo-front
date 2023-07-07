<script>
import { store } from "../store";
// import axios from 

export default {
    name: "RestaurantCard.vue",
    props: {
        restaurant: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container vh-100">
        <div class="row w-100 row-cols-1 row-cols-md-3 row-cols-lg-5 flex-wrap">
            <div class="col col-md-3 col-lg-5 mb-4">
                <div class="ms_card">
                    <div class="ms_card-img">
                        <h1 class="restaurant-name">Burger King</h1>
                        <div class="restaurant-category">
                            <p>Hamburgeria</p>
                        </div>
                        <img src="../assets/Testo_del_paragrafo-removebg-preview.png" class="" alt="Restaurant Image">
                    </div>
                    <div class="ms_card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p>Via viaviavia, 99, 00100</p>
                            <p>AoAoAoAo</p>
                        </div>
                        <div class="d-flex gap-2">
                            <p><i class="fa-solid fa-burger fa-lg"></i></p>
                            <p><i class="fa-solid fa-burger fa-lg"></i></p>
                            <p><i class="fa-solid fa-burger fa-lg"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.ms_card {
    width: 600px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.200);

    &:hover {
        transition: 0.3s ease-in-out;
        box-shadow: 0 2px 4px $primary_color;
        border: 0;
    }

    .ms_card-img {
        position: relative;
        width: 100%;
        height: 80%;
        border-radius: 10px 10px 0 0;

        &:hover {
            scale: 1.07;
            transition: 0.3s ease-in-out;
        }

        img {
            position: absolute;
            top: 20%;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: .3;
        }

        .restaurant-name {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
            text-align: center;
            z-index: 1;
        }

        .restaurant-category {
            top: 70%;
            text-align: center;
            transform: translate(-50%, -50%);
            position: absolute;
            left: 50%;
            padding: 1px 5px;
            border-radius: 5px;
            border: 1px solid black;
            background-color: $primary_color;
            opacity: .9;

            p {
                font-weight: bold;
            }
        }
    }

    .ms_card-body {
        height: 20%;
        padding: 10px;
        background-color: lightblue;

        .restaurant-address {
            margin-top: 10px;
            color: #777777;
        }
    }
}
</style>