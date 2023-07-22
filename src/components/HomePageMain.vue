<script>
import RestaurantCard from "./RestaurantCard.vue"
import ContactForm from './ContactForm.vue';
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
        RestaurantCard,
        ContactForm
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
<section class="work-with-us featured">
    <div class="container">
        <div class="section-title mb-4">
            <div class="img-absolute">
                <img src="../assets/together.svg" class="work" alt="">
            </div>   
            <h5>Lavora Con Noi</h5>
        </div>
        <div class="ms_row">
            <div class="box text-center">
                <div class="img-container">
                    <img src="../assets/Noemi.jpg" alt="">
                </div>
                
                <h2>Diventa partner</h2>
                <p>Cresci con DeliveBoo! La nostra tecnologia e la nostra base di utenti possono aiutarti a incrementare le vendite e cogliere nuove opportunità!</p>
                
            </div>
            <div class="box text-center">
                <div class="img-container">

                    <img src="../assets/chef.jpg" alt="">
                </div>
                <h2>Lavora con noi</h2>
                <p>Sei alla ricerca di una nuova sfida? Ambizione, umiltà e lavoro di squadra sono i nostri valori: se li condividi anche tu, mettiti in contatto con noi!</p>
                
            </div>
        </div>
        
    </div>
    <!-- CONTACT -->
    <ContactForm />
</section>

</template>

<style scoped lang="scss">
@use "../styles/partials/root.scss" as *;
@use "../styles/style.scss";

.work-with-us{
    margin-top: -40px;
    .work{
        width: 63px;
        height: 63px;
        left: -70px!important ;
    }
    .ms_row{
        display: flex;
        @media screen and (max-width: 800px){
            flex-direction: column;
        }

        .box{
            width: 100%;
            height: 100%;
            margin-bottom: 1rem;
            p{
                margin: 0 auto;
                width: 70%;
            }
            .img-container{
                width: 250px;
                height: 250px;
                border-radius: 100%;
                overflow: hidden;  
                margin: 0 auto;
                margin-bottom: 1rem;
                img{
                    object-fit: cover;
                    object-position: center;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
}
.featured{
    background-color: $secondary_color;
    padding-top: 1.5rem;
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
                
                width: 400px;
                height: 220px;
                padding: 5px 5px;
            }
        }
    }
}
</style>