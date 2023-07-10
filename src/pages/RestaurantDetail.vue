<script>
import axios from "axios";
import { store } from "../store";
import SectionJumbo from "../components/SectionJumbo.vue"

export default {
    name: "RestaurantDetail",
    
    data() {
        return {
            store,
            products:[],
            restaurant:[],
        }
    },
    mounted(){
        const id= this.$route.params.id;
        this.getProducts(id);
        this.getRestaurantDetails(id);
    },
    methods:{
        getProducts(restaurantId){
            axios.get(`${this.store.ApiProductsUrl}`, {params:{restaurant_id:restaurantId}}).then((resp)=>{
                this.products = resp.data.results;
            })
        },
        getRestaurantDetails(restaurantId){
            axios.get(`${this.store.ApiRestaurantUrl}`, {params:{restaurant_id:restaurantId}}).then((resp)=>{
                this.restaurant=resp.data.results
            })
        }
        
    },
    components:{
        SectionJumbo,
    },
   
}
</script>

<template>
  <SectionJumbo/>
  <section>

      <div class="container">
        <div class="restaurant-details-col">
            <div class="restaurant-detail-card-container">
                <div class="restaurant-detail-card ">
                    <h2 class="d-inline-block me-2">{{ restaurant.name }}</h2>
                    <!-- Altrimenti, puoi mostrare un messaggio di caricamento o una stringa predefinita -->
                    <p><i class="fa-solid fa-location-dot"></i>{{restaurant.address}}</p>
                </div>
            </div>
            <div class="restaurant-products">
                <div class="product-categories">
                    <div class="categories">
                        <!-- DA INSERIRE LE CATEGORIE DEI PRODOTTI CHE HA IL RISTORANTE -->
                        <p class="text-center">categorie</p>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="product-list">
                    <!-- CREAZIONE COMPONENTE? -->
                    <div v-for="product in products" class="product-card mb-3">
                        <div class="product-img">
                            <img :src="product.image" alt="">
                        </div>
                        <div class="product-content d-flex">
                            <div class="product-description">
                                <h6>{{ product.name }}</h6>
                                <p v-if="product.description" class="product-detail">{{ product.description }}</p>
                                <p v-else class="product-detail">nessuna descrizione</p>
                            </div>
                            <div class="product-price d-flex align-items-center justify-content-between">
                                <div>
                                    <span>{{product.price}}</span><span>€</span>
                                </div>
                                <div>
                                    <span class="buy">Aggiungi al <i class="fa-solid fa-cart-shopping" style="color: #000000;"></i></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-col">
            <div class="cart-container">
                <div class="cart"></div>
            </div>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;


.container{
    display: flex;
    @media screen and (max-width: 768px){
        .restaurant-details-col{
            width: 100%;
        }
        .cart-col{
            display: none;
        }
    }
    .restaurant-details-col{
        width: 60%;
        @media screen and (max-width: 768px){
            width: 100%;
        }
        .restaurant-detail-card-container{
            position: relative;
            min-height: 110px;
            .restaurant-detail-card{
                
                position: absolute;
                padding: 1rem 2rem;
                top: -75px;
                border-radius: 20px;
                box-shadow: 0px 10px 15px rgb(166, 166, 166) ;
                background-color: #ffffff;
                left: 0px;
                right: 0;
                
                
                h2{
                    margin: 0;
                    font-weight: 700;
                    font-size: 3rem;
                }
                p{
                    margin: 0;
                    font-size: .8rem;
                    color: #797979;
                }
                p.description{
                    font-size: .9rem;
                    text-align: left;
                    color: black;
                }
            }
        }
        .restaurant-products{
            
            display: flex;
            height: 100%;
            .product-categories{
                width: 20%;
                padding: 0.5rem ;
                .categories{
                    position: sticky;
                    top: 10px;
                }
            }
            .product-list{
                width: 80%;
                padding: .5rem .5rem;
                .product-card{
                    border: 1px solid grey;
                    border-radius: 10px;
                    display: flex;
                    overflow: hidden;
                    box-shadow: 0px 10px 15px rgb(166, 166, 166);
                    .product-img{
                        width: 30%;
                        
                        img{
                            object-fit: cover;
                            height: 100%;
                        }
                    }
                    .product-content{
                        width: 70%;
                        min-height: 100px;
                        padding: .5rem .5rem;
                        flex-direction: column;
                        justify-content: space-between;
                        .product-description{
                            height: 70%;
                            p.product-detail{
                                font-size: .75rem;
                                color: #797979;  
                            }
                        }
                        .product-price{
                            height: 30%;
                            .buy{
                                display: inline-block;
                                padding: 0 1rem;
                                line-height: 30px;
                                height: 30px;
                                background-color: $primary_color;
                                border-radius: 50px;
                                cursor: pointer;
                                transition: 200ms;
                                &:active{
                                    transform: scale(.8);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .cart-col{
        width: 40%;
        padding: 0 .5rem;
        position: relative;
        .cart-container{
            position: absolute;
            top: -75px;
            border-radius: 20px;
            left: .5rem;
            right: .5rem;
            bottom: 0;
            .cart{
                
                position: sticky;
                top: 20px;
                padding: 1rem 2rem;
                border-radius: 20px;
                box-shadow: 0px 10px 15px rgb(166, 166, 166);
                background-color: #ffffff;
            }
        }
    }
}


</style>