
<script>
import { store } from '../store';
import axios from 'axios';
import braintree from 'braintree-web';
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
            notes: ""

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
                                'font-size': '14px',
                                'font-family': 'Open Sans'
                            }
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: 'Enter Credit Card'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: 'Enter CVV'
                            },
                            expirationDate: {
                                selector: '#expireDate',
                                placeholder: '00 / 0000'
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
                        date_time: "2023-07-15",



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
            <input class="mb-2" type="text" id="text" v-model="notes">
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
        <button class="button button--small button--green" @click="sendPayment()"> Invia</button>


    </div>
</template>


<style lang="scss" scoped>
.container {
    margin-top: 200px;
}

// .button {
//     cursor: pointer;
//     font-weight: 500;
//     left: 3px;
//     line-height: inherit;
//     position: relative;
//     text-decoration: none;
//     text-align: center;
//     border-style: solid;
//     border-width: 1px;
//     border-radius: 3px;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     display: inline-block;
// }

// .button--small {
//     padding: 10px 20px;
//     font-size: 0.875rem;
// }

// .button--green {
//     outline: none;
//     background-color: #64d18a;
//     border-color: #64d18a;
//     color: white;
//     transition: all 200ms ease;
// }

// .button--green:hover {
//     background-color: #8bdda8;
//     color: white;
// }
</style>