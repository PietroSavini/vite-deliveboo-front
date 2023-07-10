<script>
import axios from "axios";
import { store } from "../store";
import SectionJumbo from "../components/SectionJumbo.vue"

export default {
    name: "RestaurantDetail",
   
    data() {
        return {
            store,
            products:[]
        }
    },
    mounted(){
        const id= this.$route.params.id;
        this.getProducts(id);

    },
    methods:{
        getProducts(restaurantId){
            axios.get(`${this.store.ApiProductsUrl}`, {params:{restaurant_id:restaurantId}}).then((resp)=>{
                this.products = resp.data.results;
            })
        }
    },
    components:{
        SectionJumbo,
    },

    props:{
        restaurant:Object
    }
   
}
</script>

<template>
  <SectionJumbo/>
  <section>

      <div class="container">
        <div class="restaurant-details-col">
            <div class="restaurant-detail-card-container">
                <div class="restaurant-detail-card ">
                    <h2 class="d-inline-block me-2">Titolo Ristorante</h2>
                    <p><i class="fa-solid fa-location-dot"></i>via del ristorante n.5</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur quos, quidem officia animi omnis repellendus. Itaque, praesentium? Facere ut distinctio molestias itaque nobis labore.</p>
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
                    <div class="product-card">
                        <div class="product-img">
                            <img src="" alt="">
                        </div>
                        <div class="product-content d-flex">
                            <div class="product-description">
                                <h6>Titolo piatto</h6>
                                <p class="product-detail">
                                    polpette di gamberi in umido fatte bene
                                </p>
                            </div>
                            <div class="product-price d-flex align-items-center justify-content-between">
                                <div>
                                    <span>5.00</span><span>€</span>
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
    
    height: 1500px;
   
    .restaurant-details-col{
        width: 60%;
        border: 1px solid black;
        .restaurant-detail-card-container{
            position: relative;
            min-height: 110px;
            .restaurant-detail-card{
                
                position: absolute;
                padding: 1rem 2rem;
                top: -75px;
                border-radius: 20px;
                box-shadow: 0px 0px 20px rgb(73, 73, 73);
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
            border: 1px solid rgb(0, 0, 0);
            display: flex;
            height: 100%;
            .product-categories{
                border: 1px solid red;
                width: 20%;
                padding: 0.5rem ;
                .categories{
                    position: sticky;
                    top: 10px;
                }
            }
            .product-list{
                border: 1px solid green;
                width: 80%;
                overflow-y: auto;
                padding: .5rem .5rem;
                .product-card{
                    border: 1px solid grey;
                    border-radius: 10px;
                    display: flex;
                    overflow: hidden;
                    box-shadow: 0px 10px 15px rgb(166, 166, 166);
                    .product-img{
                        border: 1px solid red;
                        width: 30%;
                        
                        img{
                            object-fit: cover;
                            display: inline-block;
                        }
                    }
                    .product-content{
                        width: 70%;
                        border: 1px solid green;
                        min-height: 100px;
                        padding: .5rem .5rem;
                        flex-direction: column;
                        justify-content: space-between;
                        .product-description{
                            border: 1px solid yellow;
                            height: 70%;
                            p.product-detail{
                                font-size: .75rem;
                                color: #797979;  
                            }
                        }
                        .product-price{
                            height: 30%;
                            border: 1px solid red;
                        }
                    }
                }
            }
        }
    }
    .cart-col{
        border: 1px solid black;
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
                box-shadow: 0px 0px 20px rgb(73, 73, 73);
                background-color: #ffffff;
            }
        }
    }
}


</style>