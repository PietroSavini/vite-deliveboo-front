import {reactive} from 'vue';

export const store = reactive({
    // Restaurant types
    ApiTypesUrl : 'http://localhost:8000/api/types',
    //array di ogetti delle categorie
    types : [],
    //array di type_id delle categorie selezionate
    types_id:[],

    //Restaurant With Types Url
    ApiRestaurantsUrl : 'http://localhost:8000/api/restaurants',
    ApiRestaurantUrl: 'http://localhost:8000/api/restaurant',
    //getProducts from restaurant
    ApiProductsUrl: 'http://localhost:8000/api/restaurants/products',
    method:{
        getArray(){
            const cart=document.getElementById('cart');
        return JSON.parse(localStorage.getItem('cart')) || [];
            
            
         },
         // salva prodotti
         salva(obj){
         return localStorage.setItem('cart',JSON.stringify(obj));
     
         },
         // cancella carrello
         delete(){
          localStorage.clear();
         },
        
     }
})




