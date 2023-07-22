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
    <div id="header-link" class="ms_footer">
        <div class="background-extencion"></div>
        <div class="ms_footer-first-row">
            <div class="deliveboo-logo">
                <img src="../assets/Testo_del_paragrafo-removebg-preview.png" alt="">
            </div>
        </div>

        <div class="ms_footer-second-row d-flex p-1">
            
                <div class="ms_link-section d-flex">
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
                </div>

                    <div class="ms_link-section-center d-flex align-items-center flex-column">
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
                
                <div class="ms_link-section d-flex">
                    <div class="ms_link-column">
                        <ul class="d-flex flex-column gap-2 text-center">
                            <h5>Contatti</h5>
                            <li>
                                <a href="">
                                    <span class="mx-1">
                                        <i class="fa-solid fa-envelope"></i> 
                                        <p class="ms_fottutissima-email">delive.boo@gmoil.com</p>
                                    </span>
                                </a>
                            </li>
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

        <div class="ms_footer-third-row d-flex align-items-center p-2">
            <div class="ms_3rd-row-col">
                <div class="d-flex gap-2">
                    <p>&copy; All rights reserved. Made with &hearts; by Team #4</p>
                </div>
            </div>

            <div class="ms_3rd-row-center d-flex gap-3">

                <div class="ms_apps">
                    <div class="ms_apple my-3">
                        <i class="fa-brands fa-apple"></i>
                        <p class="">Download from the <span>Apple Store</span></p>
                    </div>
                    <div class="ms_play">
                        <i class="fa-brands fa-google-play"></i>
                        <p class="">Download from the <span>Play Store</span></p>
                    </div>
                </div>
            </div>
            <div class="ms_3rd-row-col d-flex">
                <a class="return-btn text-white" href="#">
                    <i class="fas fa-chevron-up"></i>
                </a>
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
    padding-bottom: 2rem;
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

    .ms_footer-first-row {
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

    .ms_footer-second-row {
        width: 80%;
        margin: 0 auto;
        flex-wrap: wrap;

        
        .ms_link-section {
            width: calc(100% / 3);
            .ms_link-column {
                width: calc(100% / 2);
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
                };
                @media screen and (max-width: 425px) {
                    width: 100%;
                };
            };
            @media screen and (max-width: 768px) {
                width: 100%;
            };
            @media screen and (max-width: 425px) {
                   flex-wrap: wrap;
                };
        };
           
        .ms_link-section-center{
            width: 33.3%;

                    // SUBSCRIBE FORM
                    .ms_subscribe {
                        width: 60%;
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
                                transition: 0.2s;

                                &:hover {
                                    transform: scale(1.05);
                                    color: $primary_color;
                                }
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
                    };
                    @media screen and (max-width: 768px) {
                        width: 100%;
                    };
            
        }
    };

    .ms_footer-third-row {
        width: 80%;
         margin: 0 auto;
        flex-wrap: wrap;
        flex-direction: row;
        .ms_3rd-row-col {

            width: calc(100% / 3); 
            justify-content: flex-end;
            @media screen and (max-width: 768px) {
                width: 100%;
            };
            @media screen and (max-width: 425px) {
                    width: 100%;
            };
        };
        .ms_3rd-row-center {
            width: calc(100% / 3);
            justify-content: center;
            .ms_apple, .ms_play {
                max-width: 200px;
                max-height: 80px;
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
                };
                span {
                    font-size: 1.5rem;
                };

                i {
                    font-size: 1.5rem;
                    margin-left: 10px;
                };
                @media screen and (max-width: 425px) {
                    width: 100%;
                };
            };
            @media screen and (max-width: 768px) {
                width: 100%;
                justify-content: center;
            };
            @media screen and (max-width: 425px) {
                    flex-wrap: wrap;
            };
        };
        .return-btn {
                
                padding: 5px 10px;
                font-size: 30px;
                border: 1px solid white;
    
                i {
                    transition: .2s ease-in-out;
                }
    
                i:hover {
                    scale: 1.3;
                    transition: .2s ease-in-out;
                }
            };
    }

}

// MEDIA QUERIES
@media screen and (max-width: 990px) {
    .ms_link-column {
        font-size: 0.8rem;
    };
}

@media screen and (max-width: 830px) {
    .ms_fottutissima-email{
        font-size: 0.5rem;
    };
}


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

        .ms_apps {
            flex-direction: column;
        }

    }
}

</style>