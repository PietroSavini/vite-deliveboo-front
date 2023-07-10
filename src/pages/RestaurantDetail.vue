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
                    <span><i class="fa-solid fa-location-dot"></i>via del ristorante n.5</span>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur quos, quidem officia animi omnis repellendus. Itaque, praesentium? Facere ut distinctio molestias itaque nobis labore.</p>
                </div>
            </div>
            <div class="restaurant-products">
                
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

section{
    background-color: $secondary_color;
}
.container{
    display: flex;
    
    height: 1500px;
   
    .restaurant-details-col{
        width: 75%;
        border: 1px solid black;
        .restaurant-detail-card-container{
            position: relative;
            height: 110px;
            .restaurant-detail-card{
                
                position: absolute;
                padding: 1rem 2rem;
                top: -75px;
                border-radius: 20px;
                box-shadow: 0px 0px 20px rgb(73, 73, 73);
                background-color: #ffffff;
                left: 0px;
                right: 0;
                bottom: 10px;
                
                h2{
                    margin: 0;
                    font-weight: 700;
                    font-size: 3rem;
                }
                span{
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
            }
    }
    .cart-col{
        border: 1px solid black;
        width: 25%;
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