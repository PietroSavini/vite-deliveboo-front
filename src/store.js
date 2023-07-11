import { reactive } from 'vue';

export const store = reactive({
    // Restaurant types
    ApiTypesUrl: 'http://localhost:8000/api/types',
    //array di ogetti delle categorie
    types: [],
    //array di type_id delle categorie selezionate
    types_id: [],

    //Restaurant With Types Url
    ApiRestaurantsUrl: 'http://localhost:8000/api/restaurants',
    //Single restaurant used for details in RestaurantDetailPage.vue
    ApiRestaurantUrl: 'http://localhost:8000/api/restaurant',
    //getProducts from restaurant
    ApiProductsUrl: 'http://localhost:8000/api/restaurants/products',
    // getToken
    ApiToken: 'http://localhost:8000/api/generate/token',
    // sendPayment
    ApiPayment:'http://localhost:8000/api/make/payment',
    method: {
        getArray() {
            const cart = document.getElementById('cart');
            return JSON.parse(localStorage.getItem('cart')) || [];


        },
        // salva prodotti
        salva(obj) {
            return localStorage.setItem('cart', JSON.stringify(obj));

        },
        // cancella carrello
        delete() {
            localStorage.clear();
        },

        getCard() {
            var button = document.querySelector('#submit-button');

            braintree.dropin.create({
                authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
                selector: '#dropin-container'
            }, function (err, instance) {
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod(function (err, payload) {
                        // Submit payload.nonce to your server
                    });
                })
            });
        }

    }
})




