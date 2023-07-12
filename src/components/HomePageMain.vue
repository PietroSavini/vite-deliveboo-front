<script>
import RestaurantCard from "./RestaurantCard.vue"
export default{
    name:"HomePageMain",
    props:{randomRestaurants:Object},
    data(){
        return{

        }
    },
    methods:{
        
    },
    components:{
        RestaurantCard
    }
}
</script>

<template>
<section class="featured">
    <div class="background-extencion"></div> 
    <div class="container">
        <div class="section-title">
            <div class="img-absolute">
                <img src="https://res.cloudinary.com/glovoapp/f_auto,h_48,w_48,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight" alt="">
            </div>   
            <h5>Consigliati per te</h5>
        </div>
        <div class="row">
            <div class="ms_col" v-for="restaurant in randomRestaurants">
                <RestaurantCard :restaurant="restaurant" />       
            </div>
        </div>
    </div>
</section>
<section class="best-of">

</section>
<section class="work-with-us">

</section>
</template>

<style scoped lang="scss">
@use "../styles/partials/root.scss" as *;

.featured{
    background-color: $secondary_color;
    padding:1.5rem 0;
    position: relative;
    
    
    
    .background-extencion{
        
        position: absolute;
        left: 0px;
        right: 0px;
        top: -25px;
        height: 50px;
        border-radius: 100%;
        
        background-color: $secondary_color ;
    }
    .container{
        
        
        .section-title{
            padding-left: 2rem;
            color: black;
            @media screen and (max-width : 768px) {
                padding-left: 37%;
            }
            
            .img-absolute{
                position: relative;
            }
            
            img{
                position: absolute;
                z-index: 0;
                top: -15px;
                left: -50px;
                transform: rotate(25deg);
            }
            
            h5{
                position: relative;
                z-index: 1;
                font-weight: bold;
                
            }
        }
        .row{
            padding-top: 2rem;
            flex-wrap: wrap;
            justify-content: center;
            
            .ms_col{
                
                width: 350px;
                height: 150px;
                padding: 5px 5px;
            }
        }
    }
}
</style>