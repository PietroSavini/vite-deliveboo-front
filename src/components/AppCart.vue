<script>
import { store } from '../store';
export default {
    name: 'AppCart',
    data() {
        return {
            store,

        }
    },
    props: {
        cartProducts: Array,
        not_allowed: Boolean,
        checkout: { type: Boolean, default: true},


    },
    emits: [
        'deleteCart'
    ],
    methods: {
        getPrice(obj) {
            return parseFloat(obj.price) * obj.quantity
        },
        decrementProduct(index) {
            const product = this.cartProducts[index];
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                this.removeObj(index);
            }
            this.store.method.salva(this.cartProducts);

        },

        removeObj(index) {

            if (index >= 0 && index < this.cartProducts.length) {
                this.cartProducts.splice(index, 1);
                this.store.method.salva(this.cartProducts);
            }
        },


        getTotal() {
            let total = 0;
            this.cartProducts.forEach(product => {
                total += parseFloat(product.price) * product.quantity
            })
            return total
        },
        newObj(object) {
            const obj = {
                id: object.id,
                name: object.name,
                quantity: 0,
                price: object.price,
                restaurant: object.restaurant_id
            }
            //  vedi se contiene gia oggetto
            if (this.cartProducts.some(item => item.id === object.id)) {

                const oggetto = this.cartProducts.find(item => item.id === object.id);
                oggetto.quantity++
            }
            // salvo array aaggiornato nel local storage
            this.store.method.salva(this.cartProducts);
        },
    }
}
</script>

<template>
    <div class="cart-col">
        <div class="cart-container">
            <div class="cart">
                <div v-if="cartProducts.length > 0">
                    <ul id="cart">
                        <li class="mb-2 cart-item" v-for="obj, index in cartProducts">
                            <p>{{ obj.name }} x {{ obj.quantity }} : {{ getPrice(obj) }}&euro; </p>
                            <div class="cart-actions">
                                <button class="cart-btn minus " @click="decrementProduct(index)">&minus;</button>
                                <button class="cart-btn" @click="newObj(obj, index)">&plus;</button>
                            </div>
                        </li>
                        <div v-if="not_allowed" class="">
                            <p class="">hai un ordine in corso con un altro ristorante <router-link
                                    :to="{ name: 'restaurant-detail', params: { id: cartProducts[0].restaurant } }"
                                    @click="$emit('backToRestaurant', cartProducts[0].restaurant)"
                                    class="btn btn-primary">continua</router-link> o svuota carrello per continuare</p>


                        </div>

                    </ul>
                    <div>totale: {{ getTotal() }}&euro;</div>
                    <div class="final-actions d-flex justify-content-center">
                        <span class="btn btn-danger ms_btn" @click="$emit('deleteCart')">svuota carrello</span>
                        <span v-if="checkout" class="btn btn-success ms_btn"><router-link
                                :to="{ name: 'payment' }">checkout</router-link></span>
                    </div>

                </div>

                <div v-else class="empty-cart">
                    <h2 class="text-center">Il tuo carrello</h2>
                    <img src="../assets/empty-cart.png" alt="">
                    <p class="text-center">Non hai ancora aggiunto alcun prodotto. Quando lo farai, compariranno
                        qui!</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.cart-col {
    width: 40%;
    padding: 0 .5rem;
    position: relative;

    .cart-container {
        position: absolute;
        top: -75px;
        border-radius: 20px;
        left: .5rem;
        right: .5rem;
        bottom: 0;

        .cart {

            position: sticky;
            top: 20px;
            padding: 1rem 2rem;
            border-radius: 20px;
            box-shadow: 0px 10px 15px rgb(166, 166, 166);
            background-color: #ffffff;

            .ms_btn {
                width: 130px;
                border-radius: 40px;
                font-size: .8rem;
                margin: 0 5px;

            }

            .final-actions {
                margin: .5rem auto;
            }

            #cart {

                .cart-item {
                    display: flex;
                    width: 100%;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgb(218, 218, 218);

                    p {
                        width: 70%;
                    }

                    .cart-actions {
                        width: 30%;

                        .cart-btn {

                            cursor: pointer;
                            margin: 0 2px;
                            height: 25px;
                            width: 25px;
                            border: none;
                            background-color: lightgreen;
                            display: inline-block;
                            border-radius: 100%;

                            &.minus {
                                background-color: lightcoral;
                            }
                        }
                    }
                }

            }

            .empty-cart {
                h2 {
                    font-weight: bold;
                }

            }
        }
    }
}
</style>