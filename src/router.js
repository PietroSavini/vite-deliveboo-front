import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "./pages/HomePage.vue";
// import RestaurantsPage from "./pages/RestaurantsPage.vue";
// import RestaurantDetail from "./pages/RestaurantDetail.vue";
// import PaymentPage from "./pages/PaymentPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            // component: HomePage
            component: () => import("./pages/HomePage.vue")
        },
        {
            path: "/restaurants",
            name: "restaurants",
            // component: RestaurantsPage
            component: () => import("./pages/RestaurantsPage.vue"),
        },
        {
            path:"/restaurant/detail/:id",
            name:"restaurant-detail",
            // component: RestaurantDetail,
            component: () => import("./pages/RestaurantDetail.vue"),
            props:true
        },
        {
            path:"/payment",
            name:"payment",
            // component: PaymentPage,
            component: () => import("./pages/PaymentPage.vue")
        },
    ],
});

export { router };