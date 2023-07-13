
<script>
import { store } from '../store';
import axios from 'axios';
import braintree from 'braintree-web';
import SectionJumbo from '../components/SectionJumbo.vue';

export default {
    name: "PaymentPage",
    data() {
        return {
            store,
            hostedFieldInstance: false,
            cartProducts: [],
            detailsProducts: [],
            token: "",
            nameSurname: "",
            address: "",
            email: "",
            notes: "",
            cardOwner:"",
            hover:false,

        }
    },
    mounted() {

        this.cartProducts = this.store.method.getArray();
        this.getIdQuantity();
        // token

        axios.get(this.store.ApiToken).then((resp) => {


            braintree.client.create({
                authorization: resp.data.token

            })
                .then(clientInstance => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                'font-size': '15px',
                                'font-family': 'Open Sans'
                            }
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: '0000-0000-0000-0000'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: '123'
                            },
                            expirationDate: {
                                selector: '#expireDate',
                                placeholder: '00 / 00'
                            }
                        }
                    }
                    return braintree.hostedFields.create(options)
                })
                .then(hostedFieldInstance => {
                    // @TODO - Use hostedFieldInstance to send data to Braintree
                    this.hostedFieldInstance = hostedFieldInstance;
                })
                .catch(err => {
                });


        })




    },
    methods: {

        getIdQuantity() {
            this.cartProducts.forEach(product => {
                const products = {
                    id: product.id,
                    quantity: product.quantity,
                }
                this.detailsProducts.push(products);

            })
        },
        sendPayment() {
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.tokenize().then(payload => {
                    axios.post(`${this.store.ApiPayment}`, {

                        // array oggetti id quantità
                        cart: this.detailsProducts,
                        // token
                        token: payload.nonce,
                        // array oggetto user
                        customer_name_surname: this.nameSurname,
                        customer_address: this.address,
                        customer_notes: this.notes,
                        customer_email: this.email,



                    }).then(resp => {
                        this.store.method.delete();
                        this.$router.push({path: '/restaurants',query:{success:true}}) ;
                        console.log(resp);
                    })
                })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }


    },
    components: {

        SectionJumbo
    }





}

</script>
<template>
    <SectionJumbo />
    <section class="payment-page">

        <div class="container py-4">
            <!-- CARTA  ------------------------------------------------------------------>
            <div class="card-section-container">

                <div class="card-container">

                    <div :class="hover?'front-rotate':'' " class="front">
                        <div class="image">
                            <img src="../assets/chip.png" alt="">
                            <img src="../assets/visa.png" alt="">
                        </div>
                        <div class="card-number-box">0000-0000-0000-0000</div>
                        <div class="flexbox">
                            <div class="box">
                                <span>Intestatario</span>
                                <div class="card-holder-name">{{cardOwner}}</div>
                            </div>
                            <div class="box">
                                <span>Scade il</span>
                                <div class="expiration">
                                    <span class="exp-month">00 /</span>
                                    <span class="exp-year"> 00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div :class="hover?'back-rotate':'' " class="back">
                        <div class="stripe"></div>
                        <div class="box">
                            <span>cvv</span>
                            <div class="cvv-box">123</div>
                            <img src="../assets/visa.png" alt="">
                        </div>
                    </div>

                </div>
            </div>
            <!-- /CARTA----------------------------------------------------------------->


            <!-- FORM SPEDIZIONE-------------------------------------------------------->
            <div class="shipping-payment text-center ">
                <h2 class="text-center">Completa il tuo Ordine</h2>
                <div class="forms d-flex mt-4">
                    <!-- shipping form info -->
                    <div class="shipping text-start">
                        <h5 class="text-center">informazioni di consegna</h5>    
                        <form>

                            <label for="name">Nome e Cognome: *</label>
                            <input class="mb-2" type="text" id="name" v-model="nameSurname">
                     
                            <label for="address">indirizzo di Consegna: *</label>
                            <input class="mb-2" type="text" id="address" v-model="address">
                           
                            <label for="email">email: *</label>
                            <input class="mb-2" type="email" id="email" v-model="email">
                         
                            <label for="text">Note: </label>
                            <textarea class="mb-2"  id="text" v-model="notes"></textarea>
                            
                        </form>
                        

                    </div>
                    <!-- /shipping form info -->

                    <!-- Credit Card from Info -->
                    <div class="payment text-start">
                        <h5 class="text-center">Dettagli Carta</h5>
                        <form >
                            <label for="cardOwner">Intestatario Carta</label>
                            <input type="text" class="mb-2" v-model="cardOwner" id="cardOwner">

                            <label for="creditCardNumber">Numero Carta</label>
                            <div id="creditCardNumber" class="form-control mb-2"></div>
                        
                            <label for="expireDate">Data di Scadenza</label>
                            <div id="expireDate" class="form-control mb-2"></div>
                            
                            <div @mouseenter="hover = true" @mouseleave="hover = false" class="cvv-input">
                                <label for="cvv">CVV</label>
                                <div id="cvv" class="form-control mb-2"></div>
                            </div>         
                        </form>
                    </div>
                </div>
                <!-- /Credit Card from Info -->
                <button class="submit-btn" @click="sendPayment()"> Procedi all' ordine</button>
                <hr>
                <p class="text-center mb-2">
                     ti invieremo un email con i dettagli della consegna ad avvenuto pagamento 
                </p>
                <p>* campi obbligatori</p>
            </div>

        </div>

    </section>
    
</template>


<style lang="scss" scoped>
section.payment-page {
    background-color: #EEEEEE;
    padding: 2rem 0;
    height: calc(100vh - 200px);
    position: relative;
    @media screen and (max-width: 768px){
        height: calc(100vh + 100px);
    }

    .container {
        background-color: #ffff;
        position: absolute;
        border-radius: 25px;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 10px 30px rgb(77, 77, 77);
        .shipping-payment{
            .submit-btn{
                display: inline-block;
                
                width: 50%;
                background:linear-gradient(45deg, blueviolet, deeppink);
                margin-top: 20px;
                padding: 10px;
                font-size: 20px;
                color:#fff;
                border-radius: 10px;
                cursor: pointer;
                transition: .2s linear;
                border: none;
            }
            @media screen and (max-width:768px){
                .forms{
                    flex-direction: column-reverse;
                    align-items: center;
                    gap: 2rem;
                    .payment,.shipping{
                        width: 70%;
                        
                    }
                }
            }
            .payment,.shipping{
                width: 50%;
                padding: 0 .5rem;
                form{
                    display: flex;
                    flex-direction: column;
                    .form-control{
                        height: 26px;
                        border-radius: 10px ;
                        border-color: grey ;
                        width: 100%;
                        transition: 200ms;
                       
                        
                    }
                    label{
                        display: block;
                        color: #585858;
                    }
                    input,textarea{
                        border-radius: 10px;
                        border: 1px solid grey;
                        padding: 0 .8rem;
                        transition: 200ms;
                        
                        &:focus{
                            outline: none;
                            
                        }
                    }
                }
            }
           
        }

        .card-section-container {
            
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            margin-bottom: 2rem;

            .card-container {

                position: relative;
                height: 250px;
                margin-bottom: -100px;
                width: 400px;
                @media screen and (max-width: 450px){
                    width: 100%;
                }
                @media screen and (max-width : 330px){
                    display: none;
                }

                .back {
                    position: absolute;
                    top: -100px;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(45deg, blueviolet, deeppink);
                    border-radius: 5px;
                    padding: 20px 0;
                    text-align: right;
                    backface-visibility: hidden;
                    box-shadow: 0 15px 25px rgba(0, 0, 0, .2);
                    transform: perspective(1000px) rotateY(180deg);
                    transition: transform .4s ease-out;

                    .cvv-box {
                        height: 50px;
                        padding: 10px;
                        margin-top: 5px;
                        color: #333;
                        background: #fff;
                        border-radius: 5px;
                        width: 100%;
                    }

                    .stripe {
                        background: #000;
                        width: 100%;
                        margin: 10px 0;
                        height: 50px;
                    }

                    .box {
                        padding: 0 20px;

                        span {
                            color: #fff;
                            font-size: 15px;
                        }

                        img {
                            margin-top: 30px;
                            height: 30px;
                        }
                    }
                }

                .front {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: -100px;
                    left: 0;
                    background: linear-gradient(45deg, blueviolet, deeppink);
                    border-radius: 5px;
                    backface-visibility: hidden;
                    box-shadow: 0 15px 25px rgba(0, 0, 0, .2);
                    padding: 20px;
                    transform: perspective(1000px) rotateY(0deg);
                    transition: transform .4s ease-out;

                    .card-number-box {
                        padding: 30px 0;
                        font-size: 22px;
                        color: #fff;
                    }

                    .image {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-top: 10px;

                        img {
                            height: 50px;
                        }
                    }

                    .flexbox {
                        display: flex;

                        .box:nth-child(1) {
                            margin-right: auto;
                        }

                        .box {
                            font-size: 15px;
                            color: #fff;

                        }
                    }
                }
            }
        }
    }
}

.front-rotate{
    transform: perspective(1000px) rotateY(-180deg) !important;
}
.back-rotate{
    transform: perspective(1000px) rotateY(0deg) !important;
}
</style>