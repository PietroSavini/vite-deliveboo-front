<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            isSubscribed: false,
        };
    },
    methods: {
        subNow() {
            this.isSubscribed = true
        }
    },
}
</script>

<template>
    <div class="ms_footer">
        <div class="background-extencion"></div>
        <div class="ms_footer-first-row">
            <div class="deliveboo-logo">
                <img src="../assets/Testo_del_paragrafo-removebg-preview.png" alt="">
            </div>
        </div>

        <div class="ms_footer-second-row">
            <div class="ms_links">
                <div class="ms_link-column">
                    <ul class="d-flex flex-column gap-2 text-center">
                        <h5>About Us</h5>
                        <li>La nostra storia</li>
                        <li>Blog</li>
                        <li>Sicurezza</li>
                        <li>Link Prova</li>
                    </ul>
                </div>

                <div class="ms_link-column">
                    <ul class="d-flex flex-column gap-2 text-center">
                        <h5>FAQs</h5>
                        <li>DeliveBoo per Clienti</li>
                        <li>DeliveBoo per Riders</li>
                        <li>DeliveBoo per Ristoratori</li>
                        <li>Link Prova</li>
                    </ul>
                </div>

                <div class="ms_link-column d-flex align-items-center flex-column">
                    <h5 class="text-center">Newsletter</h5>
                    <div class="ms_subscribe">
                        <form class="subscription d-flex flex-column gap-3">
                            <input class="add-email text-center" type="email" placeholder="subscribe@me.now">
                            <button v-if="!isSubscribed" class="submit-email" @click="subNow"
                                type="button">Iscriviti</button>
                            <div v-else class="subscribed" type="button">Iscritto!</div>

                        </form>
                    </div>
                </div>

                <div class="ms_link-column">
                    <ul class="d-flex flex-column gap-2 text-center">
                        <h5>Contatti</h5>
                        <li><a href=""> <span class="mx-1"><i class="fa-solid fa-envelope"></i></span>
                                delive.boo@gmoil.com</a></li>
                        <li><a href=""> <span class="mx-1"><i class="fa-solid fa-phone"></i></span> 02-927 94 304</a></li>
                    </ul>
                </div>

                <div class="ms_link-column">
                    <div class="d-flex flex-column gap-2 text-center">
                        <h5>Social Media</h5>
                        <ul>
                            <li class="ms_icons"><a href=""><i class="fa-brands fa-square-twitter"></i></a></li>
                            <li class="ms_icons"><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                        <ul>
                            <li class="ms_icons"><a href=""><i class="fa-brands fa-square-facebook"></i></a></li>
                            <li class="ms_icons"><a href=""><i class="fa-brands fa-square-reddit"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <hr>

        <div class="ms_footer-third-row d-flex justify-content-between align-items-center">
            <div class="ms_credits">
                <div class="d-flex gap-2 text-center">
                    <p>&copy; All rights reserved. Made with &hearts; by Team #4</p>
                </div>
            </div>

            <div class="ms_apps d-flex gap-3">
                <div class="ms_apple">
                    <i class="fa-brands fa-apple"></i>
                    <p class="">Download from the <span>Apple Store</span></p>
                </div>
                <div class="ms_play">
                    <i class="fa-brands fa-google-play"></i>
                    <p class="">Download from the <span>Play Store</span></p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss";
@use "../styles/partials/root.scss" as *;

.ms_footer {
    background-color: rgb(0, 0, 0);
    color: silver;
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;

    .background-extencion {
        position: absolute;
        left: 0px;
        right: 0px;
        top: -25px;
        height: 50px;
        border-radius: 100%;
        background-color: rgb(0, 0, 0);
    }

    &-first-row {
        width: 90%;
        margin: 0 auto;

        .deliveboo-logo {
            width: 20%;
            height: 100px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    &-second-row {
        width: 80%;
        margin: 0 auto;

        .ms_links {
            display: flex;
            justify-content: space-between;

            .ms_link-column {
                .ms_icons {
                    a {
                        i {
                            font-size: 1.5rem;
                            padding: 10px;
                            margin: 0 5px;
                            border-radius: 2px;
                            color: black;
                            background-color: $green_deli;
                            transition: .2s ease-in-out;

                            &:hover {
                                transform: scale(1.05);
                                background-color: $primary_color;
                                color: $green_deli;
                            }
                        }
                    }
                }

                // SUBSCRIBE FORM
                .ms_subscribe {
                    width: 100%;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .subscription {
                        width: 100%;
                        padding: 20px;

                        .add-email {
                            padding: 10px;
                            border-radius: 5px;
                        }

                        .submit-email {
                            border-radius: 10px;
                            height: 30%;

                            background-color: $green_deli;
                            font-size: 1.2rem;
                        }

                        .subscribed {
                            border-radius: 10px;
                            height: 30%;
                            background-color: $primary_color;
                            font-size: 1.2rem;
                            color: black;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    &-third-row {
        width: 80%;
        margin: 0 auto;

        .ms_apps {

            .ms_apple,
            .ms_play {
                width: 200px;
                height: 80px;
                border: 1px solid white;
                border-radius: 10px;
                padding: 5px;
                display: flex;
                text-align: center;
                align-items: center;
                font-size: .8rem;
                cursor: pointer;
                transition: .2s ease-in-out;

                &:hover {
                    transform: scale(1.05);
                    background-color: rgba(255, 255, 255, 0.5);
                }


                span {
                    font-size: 1.5rem;
                }

                i {
                    font-size: 1.5rem;
                    margin-left: 10px;
                }
            }
        }
    }
}

// MEDIA QUERIES

@media screen and (max-width: 578px) {

    .ms_footer-first-row {
        display: flex;
        width: 100%;
        justify-content: center;

        .deliveboo-logo {
            width: 70%;
        }
    }


    .ms_links {
        flex-direction: column;
        gap: 40px;
    }


    .ms_footer-third-row {
        flex-direction: column;
        gap: 40px;

        .ms_credits {}

        .ms_apps {
            flex-direction: column;
        }

    }
}

// @media screen and (max-width: 768px) {

//     .ms_footer-first-row {
//         display: flex;
//         width: 100%;
//         justify-content: center;

//         .deliveboo-logo {
//             width: 50%;
//         }
//     }

//     .ms_footer-second-row {
//         // flex-wrap: wrap;
//         // justify-content: space-around;

//         .ms_link-column {
//             flex-direction: column;
//             flex-wrap: wrap;
//             width: calc(100% / 2);
//             gap: 40px;
//         }
//     }
// }
</style>