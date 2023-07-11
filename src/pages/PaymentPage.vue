
<script>
import { store } from '../store';
import axios from 'axios';
import braintree from 'braintree-web';
export default {
    name: "PaymentPage",
    data() {
        return {
            store,
            cartProducts: [],
            detailsProducts: [],
            token: "",
            nameSurname: "",
            address: "",
            email: "",
            tel: ""

        }
    },
    mounted() {
        this.cartProducts = this.store.method.getArray();
        this.getIdQuantity();
        // token
           this.getToken();
    },
    methods: {
        getToken() {
            axios.get(this.store.ApiToken).then((resp) => {
                console.log(resp);
            })
        },
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
                        params: {
                            // array oggetti id quantità
                            products: this.detailsProducts,
                            // token
                            token: this.token,
                            // array oggetto user
                            userDetails: this.user,

                        }
                    }).then(resp => {
                        this.$router.push('/state');
                    })
                })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }


    },



}
</script>
<template>
    <div class="container text-center ">
        <div>
            <label for="name">nome</label>
            <input class="mb-2" type="text" id="name" v-model="nameSurname">
        </div>

        <div>
            <label for="address">indirizzo</label>
            <input class="mb-2" type="text" id="address" v-model="address">
        </div>
        <div>
            <label for="email">email</label>
            <input class="mb-2" type="email" id="email" v-model="email">
        </div>
        <div>
            <label for="text">informazioni aggiuntive:</label>
            <input class="mb-2" type="text" id="text">
        </div>
        <!-- dati carta -->

        <div class="form-group">
            <label>Credit Card Number</label>
            <div id="creditCardNumber" class="form-control"></div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-6">
                    <label>Expire Date</label>
                    <div id="expireDate" class="form-control"></div>
                </div>
                <div class="col-6">
                    <label>CVV</label>
                    <div id="cvv" class="form-control"></div>
                </div>
            </div>
        </div>
        <button class="button button--small button--green">{{ sendPayment() }} Invia</button>
    </div>
</template>


<style lang="scss" scoped>
.container {
    margin-top: 200px;
}

.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}
</style>