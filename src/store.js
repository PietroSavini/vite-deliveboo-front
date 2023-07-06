import {reactive} from 'vue';

export const store = reactive({
    ApiTypesUrl : 'http://localhost:8000/api/types',
    ApiRestaurantsUrl: "http://localhost:8000/api/restaurants",
})



