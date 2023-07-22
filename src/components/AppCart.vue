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
        checkout: { type: Boolean, default: true },


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
            if (this.not_allowed) {
                this.checkout = false;
                return;
            }

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
                <h2 class="text-center">Il tuo carrello</h2>
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
                            <h2 class="text-center">Attenzione!</h2>
                            <p class="fs-4">Hai un ordine in corso con un altro ristorante!</p>
                            <p class="fs-4">Per tornare a quello precedente clicca <router-link
                                    :to="{ name: 'restaurant-detail', params: { id: cartProducts[0].restaurant } }"
                                    @click="$emit('backToRestaurant', cartProducts[0].restaurant)"
                                    class="text-primary"><u>qui</u></router-link>, altrimenti svuota il carrello.</p>
                        </div>

                    </ul>

                    
                     
                    <div class="fs-3 ms-2">Totale: {{ getTotal() }}&euro;</div>
                    <div class="final-actions d-flex justify-content-center">
                        <span class="btn btn-danger ms_btn" @click="$emit('deleteCart')">Svuota carrello</span>
                        <span v-if="checkout" class="btn btn-success ms_btn" :class="{ 'disabled': not_allowed }"><router-link
                                :to="{ name: 'payment' }">Checkout</router-link></span>
                    </div>

                </div>

                <div v-else class="empty-cart">
                    
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
    
    
    @media screen and (max-width: 768px) {
        
        width: 100%;
        position: absolute;
        top: 100px;
        right: 0%;
    }

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
            padding: 1rem 0;
            border-radius: 20px;
            box-shadow: 0px 10px 15px rgb(166, 166, 166);
            background-color: #ffffff;
    
            
            

            .ms_btn {
                width: 150px;
                border-radius: 40px;
                font-size: 1rem;
                margin: 0 5px;

            }

            .final-actions {
                margin: .5rem auto;
            }

            #cart {
                max-height: 400px;
                overflow: auto;
                padding: 0 .5rem;
                &::-webkit-scrollbar {
                    background: transparent;
                    
                }

                &::-webkit-scrollbar-thumb {
                    background-color: rgba($color: #949494, $alpha: .5);
                    border-radius: 10px;
                }
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