import {reactive} from 'vue';

export const store = reactive({
    // Restaurant types
    ApiTypesUrl : 'http://localhost:8000/api/types',
    //array di ogetti delle categorie
    types : [],
    //array di type_id delle categorie selezionate
    types_id:[],

    //Restaurant With Types Url
    ApiRestaurantsUrl : 'http://localhost:8000/api/restaurants'
    
})




