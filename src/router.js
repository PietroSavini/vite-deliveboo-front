import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RestaurantsPage from "./pages/RestaurantsPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import RestaurantDetail from "./pages/RestaurantDetail.vue";
import PaymentPage from "./pages/PaymentPage.vue"


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
            path:"/restaurant/detail/:id",
            name:"restaurant-detail",
            component: RestaurantDetail,
            props:true
        },
        {
            path:"/payment",
            name:"payment",
            component: PaymentPage,
           
        }
    ],
});

export { router };