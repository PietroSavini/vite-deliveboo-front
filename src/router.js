import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RestaurantsPage from "./pages/RestaurantsPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/restaurants",
            name: "restaurants",
            component: RestaurantsPage
        },
        {
            path: "/about-us",
            name: "about-us",
            component: AboutUsPage
        },
    ],
});

export { router };