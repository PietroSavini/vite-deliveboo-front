<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            search: true,
            headerHeight: true,
            searchResults: '',
            mobileMenuOpen: false,
            showNavLinks: true,
            navLinks: [
                {
                    label: "Home",
                    route: "home"
                },
                {
                    label: "Restaurants",
                    route: "restaurants"
                },
                {
                    label: "About Us",
                    route: "about-us"
                },
            ],
            mobileNavLinks: [
                {
                    icon: 'fa-solid fa-home',
                    route: 'home'
                },
                {
                    icon: 'fa-solid fa-utensils',
                    route: 'restaurants'
                },
                {
                    icon: 'fa-solid fa-info-circle',
                    route: 'about-us'
                },
            ],
        }

    },
    methods: {
        //cambio il valore di search
        show() {
            this.search = !this.search;
        },
        searchBar() {
            this.headerHeight = !this.headerHeight;
            if (this.search !== true && this.headerHeight) {
                this.search = !this.search

            } else {
                setTimeout(this.show, 1000);
            }
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            // this.mobileMenuOpen = !this.showNavLinks;
        }
    }

}
</script>

<template>
    <header>
        <div class="overlay"></div>

        <div :class="[headerHeight ? '' : 'header-extends']" class="container">

            <div class="deliveboo-logo">
                <img src="../assets/Testo_del_paragrafo-removebg-preview.png" alt="">
            </div>

            <nav class="nav-links" :class="{ 'show-nav-links': showNavLinks }">
                <ul class="d-flex align-items-center">
                    <li v-for="link in navLinks">
                        <router-link :to="{ name: link.route }">{{ link.label }}</router-link>
                    </li>
                    <li><a href="#">Contattaci</a></li>
                    <li @click="searchBar"><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></li>
                </ul>


                <div>
                    <input v-model="searchResults" class="px-3" type="search" name="" id=""
                        :class="search ? 'show' : 'hidden'">
                </div>

            </nav>

            <ul class="mobile-nav-links" v-if="mobileMenuOpen">
                <li v-for="link in mobileNavLinks">
                    <router-link :to="{ name: link.route }">
                        <i :class="link.icon"></i>
                    </router-link>
                </li>
            </ul>

            <div class="hamburger-menu" @click="toggleMobileMenu">
                <button class="btn">
                    <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
                </button>
            </div>

            <div class="user-interactions">
                <a href="http://localhost:8000/" class="login-container">
                    <div class="login-btn">
                        <p class="login-cta">Sei un ristoratore?</p>
                        <span>accedi</span>
                    </div>
                </a>
            </div>

        </div>

    </header>
</template>

<style scoped lang="scss">
header {
    border-bottom: 2px solid;
    border-color: rgba($color: #ffffff, $alpha: .6);
    position: absolute;
    padding-top: 17px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: #ffff;

    .overlay {
        position: absolute;
        z-index: -1;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba($color: #2e2e2e, $alpha: .4);
        filter: blur(10px);
    }


    .container {
        .mobile-nav-links {
            // display: block;
            display: flex;
            align-items: center;
            justify-content: center;
            
            a {
                margin: 0 5px;
                padding: 10px;
                border-radius: 50%;
                background-color: #FFC245;
                transition: background-color 200ms;
                font-size: 0.9rem;
            }

            a:hover {
                background-color: red;
            }
        }

        // margin: 0 auto;
        // max-width: 1300px;
        width: 100%;
        height: 80px;
        transition: 500ms;
        display: flex;
        padding: 5px 0;
        justify-content: center;
        gap: 1%;
        // align-items: center;

        &.header-extends {
            height: 120px;
        }

        .deliveboo-logo {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20%;
            height: 60px;

            img {
                position: relative;
                width: 100%;
                top: 0;
                left: 0;
                // min-width: 200px;    
            }
        }

        .nav-links {
            .show-nav-links {
                display: none;
            }


            width: 60%;

            // flex-grow: 1;
            &>div {

                display: flex;
                justify-content: center;
                padding: .5rem 0;

                input {
                    width: 80%;
                    border-radius: 30px;
                    outline: none;
                    border: 1px solid;
                    border-color: rgba($color: #ffffff, $alpha: .6);
                    color: #fff;
                    transition: opacity 200ms;
                    background-color: rgba($color: #bdb9b9, $alpha: .6);

                    &.hidden {
                        opacity: 1;
                    }

                    &.show {
                        opacity: 0;
                    }

                }
            }

            ul {
                border: 2px solid;
                border-color: rgba($color: #ffffff, $alpha: .6);
                height: 60px;
                border-radius: 30px;
                cursor: pointer;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20%;
                    border-right: 1px solid;
                    border-color: rgba($color: #ffffff, $alpha: .6);
                    height: 100%;
                    transition: 200ms;

                    &:first-of-type {
                        border-top-left-radius: 30px;
                        border-bottom-left-radius: 30px;
                    }

                    &:last-of-type {
                        border-right: none;
                        border-top-right-radius: 30px;
                        border-bottom-right-radius: 30px;

                    }

                    &:hover {
                        background-color: rgba($color: #FFC245, $alpha: .35);

                        a {
                            color: #ffffff;

                        }

                        i {
                            color: #ffff
                        }
                    }

                    i {
                        color: rgba($color: #ffffff, $alpha: .8);

                    }

                    a {
                        width: 100%;
                        text-align: center;
                        display: inline-block;
                        color: rgba($color: #ffffff, $alpha: .8);
                        border-radius: 20px;
                        font-weight: bold;
                    }
                }
            }
        }

        .hamburger-menu {}

        .user-interactions {
            width: 20%;
            justify-content: end;
            align-items: center;
            height: 60px;
            margin-left: 1%;

            .login-btn {
                border: 2px solid;
                border-color: rgba($color: #ffffff, $alpha: .6);
                position: relative;
                width: 50%;
                border-radius: 15px;
                height: 30px;
                z-index: 1;
                text-align: center;
                transition: 200ms;
                margin-top: 25px;

                &:hover {
                    background-color: #FFC244;
                    color: #ffff;
                }

                .login-cta {
                    font-family: 'Great Vibes', cursive;
                    color: #ffdd44;
                    font-size: 2rem;
                    transform: rotate(-5deg);
                    position: absolute;
                    width: 200px;
                    bottom: 70%;
                    left: 0;
                    z-index: 2;

                }
            }

        }
    }

}

// MEDIA QUERIES
@media screen and (max-width: 578px) {
    .hamburger-menu {
        display: block;
    }
}

@media screen and (max-width: 768px) {

    .deliveboo-logo {
        // height: 500px;
    }

    .nav-links {
        display: none;
    }


    .user-interactions {
        display: none;
    }

    .container {
        justify-content: space-between;
    }

    .hamburger-menu {
        align-self: center;
        display: block;
    }
}

@media screen and (min-width: 769px) {

    .hamburger-menu,
    .mobile-nav-links {
        display: none;
    }
}

@media screen and (max-width: 992px) {
    .nav-links ul li {
        font-size: 0.8rem;
    }
}
</style>

