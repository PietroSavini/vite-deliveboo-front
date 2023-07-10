<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            queries: [],
            searchInterval: null,
            search: true,
            headerHeight: true,
            searchResults: '',
            navLinks: [
                {
                    label: "Home",
                    route: "home"
                },
                {
                    label: "Restaurants",
                    route: "restaurants"
                },
                {
                    label: "About Us",
                    route: "about-us"
                },
            ]
        }

    },
    methods: {
        //cambio il valore di search
        show() {
            this.search = !this.search;
        },
        searchBar() {
            this.headerHeight = !this.headerHeight;
            if (this.search !== true && this.headerHeight) {
                this.search = !this.search

            } else {
                setTimeout(this.show, 1000);
            }
        },
        searchQuery() {
            clearTimeout(this.searchInterval);
            this.queries = [];
            this.searchInterval = setTimeout(() => {
                axios.get(`${store.ApiRestaurantsUrl}`, {
                    params: {
                        query: this.searchResults
                    }
                }).then((resp) => {
                    console.log("ciao");
                    this.queries = resp.data.results.data;
                });
            }, 1000);
        }

    }

}
</script>

<template>
    <header>
        <div :class="headerHeight ? '' : 'header-extends'" class="container d-flex py-2">
            <div class="deliveboo-logo d-flex align-items-center">
                <img src="../assets/Testo_del_paragrafo-removebg-preview.png" alt="">
            </div>
            <nav>
                <ul class="d-flex align-items-center text-dark">
                    <li v-for="link in navLinks">
                        <router-link :to="{ name: link.route }">{{ link.label }}</router-link>
                    </li>
                    <li><a href="#">Contattaci</a></li>
                    <li @click="searchBar"><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></li>
                </ul>
                <div>
                    <input v-model="searchResults" class="px-3" type="search" name="" id=""
                        :class="search ? 'show' : 'hidden'" @input="searchQuery">
                </div>
            </nav>
            <div class="user-interactions d-flex ">
                <a href="http://localhost:8000/">
                    <div class="login-btn">
                        <p class="login-cta">Sei un ristoratore?</p>
                        <span>accedi</span>
                    </div>
                </a>
            </div>
        </div>

    </header>
</template>

<style scoped lang="scss">
header {
    border-bottom: 2px solid;
    border-color: rgba($color: #ffffff, $alpha: .6);
    position: absolute;
    padding-top: 17px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: #ffff;

    .container {
        margin: 0 auto;
        width: 80%;
        max-width: 1300px;
        height: 80px;
        transition: 500ms;

        &.header-extends {
            height: 120px;
        }

        .deliveboo-logo {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20%;
            height: 60px;

            img {
                position: relative;
                top: 0;
                left: -40px;
                min-width: 200px;
            }
        }

        nav {
            width: 60%;

            &>div {

                display: flex;
                justify-content: center;
                padding: .5rem 0;

                input {
                    width: 80%;
                    border-radius: 30px;
                    outline: none;
                    border: 1px solid;
                    border-color: rgba($color: #ffffff, $alpha: .6);
                    color: #fff;
                    transition: opacity 200ms;
                    background-color: rgba($color: #bdb9b9, $alpha: .6);

                    &.hidden {
                        opacity: 1;
                    }

                    &.show {
                        opacity: 0;
                    }

                }
            }

            ul {
                border: 2px solid;
                border-color: rgba($color: #ffffff, $alpha: .6);
                height: 60px;
                border-radius: 30px;
                cursor: pointer;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20%;
                    border-right: 1px solid;
                    border-color: rgba($color: #ffffff, $alpha: .6);
                    height: 100%;
                    transition: 200ms;

                    &:first-of-type {
                        border-top-left-radius: 30px;
                        border-bottom-left-radius: 30px;
                    }

                    &:last-of-type {
                        border-right: none;
                        border-top-right-radius: 30px;
                        border-bottom-right-radius: 30px;

                    }

                    &:hover {
                        background-color: rgba($color: #FFC245, $alpha: .35);

                        a {
                            color: #ffffff;

                        }

                        i {
                            color: #ffff
                        }
                    }

                    i {
                        color: rgba($color: #ffffff, $alpha: .8);

                    }

                    a {
                        width: 100%;
                        text-align: center;
                        display: inline-block;
                        color: rgba($color: #ffffff, $alpha: .8);
                        border-radius: 20px;
                        font-weight: bold;
                    }
                }
            }
        }

        .user-interactions {

            width: 20%;
            justify-content: end;
            align-items: center;
            height: 60px;

            .login-btn {
                border: 2px solid;
                border-color: rgba($color: #ffffff, $alpha: .6);
                position: relative;
                width: 80px;
                border-radius: 15px;
                height: 30px;
                z-index: 1;
                text-align: center;
                transition: 200ms;
                margin-top: 25px;

                &:hover {
                    background-color: #FFC244;

                    color: #ffff;
                }

                .login-cta {
                    font-family: 'Great Vibes', cursive;
                    color: #ffdd44;
                    font-size: 2rem;
                    transform: rotate(-5deg);
                    position: absolute;
                    width: 200px;
                    top: -39px;
                    left: -63px;
                    z-index: 2;


                }
            }

        }
    }

}
</style>

