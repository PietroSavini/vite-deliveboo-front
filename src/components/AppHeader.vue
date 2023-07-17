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
                    label: "Ristoranti",
                    route: "restaurants"
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

        <div :class="[headerHeight && !mobileMenuOpen ? '' : 'header-extends']" class="container">

            <div class="deliveboo-logo">
                <img src="../assets/Testo_del_paragrafo-removebg-preview.png" alt="">
            </div>

            <nav class="nav-links" :class="{ 'show-nav-links': showNavLinks }">
                <ul class="d-flex align-items-center">
                    <li v-for="link in navLinks">
                        <router-link :to="{ name: link.route }">{{ link.label }}</router-link>
                    </li>
                    <li><a href="">Contattaci</a></li>
                    <li @click="searchBar"><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></li>
                </ul>


                <div>
                    <input v-model="searchResults" class="px-3" type="search" name="" id=""
                        :class="search ? 'show' : 'hidden'">
                </div>

            </nav>

            <ul class="mobile-nav-links" >
                <li :class="mobileMenuOpen ? 'show' : 'hidden'" v-for="link in mobileNavLinks">
                    <router-link :to="{ name: link.route }  ">
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
                <a href="http://localhost:8000/" >
                        <p class="login-cta">Sei un ristoratore?</p>
                        <span class="login-btn">accedi</span>
                </a>

                <a href="http://localhost:8000/" >
                    <div class="login-btn type-2">
                        <i class="fa-regular fa-user" style="color: #ffffff;"></i>
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
    overflow: hidden;

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
        width: 100%;
        height: 80px;
        transition: 500ms;
        display: flex;
        align-items: start;
        padding: 5px 0;
        justify-content: center;
        
        
        .mobile-nav-links {
            
            position: absolute;
            bottom: 0;
           
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (min-width:800px){
                display: none;
            }
            & li{
                transition: 500ms;
                & a:hover{
                    background-color: rgba($color: #FFC245, $alpha: .35);
                    color:#fff;
                }
            }

            & li.hidden {
                opacity: 0;
            }

            & li.show { 
                opacity: 1;
            }

            a {
                transition: 200ms;
                display: flex;
                width: 40px;
                height: 40px;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                margin: 0 5px;
                border: 2px solid rgba($color: #ffffffa8, $alpha: .8);
                color: rgba(#ffffffa8, $alpha: .8);
                transition: background-color 200ms;
                font-size: 0.9rem;
            }

        }

        
        

        &.header-extends {
            height: 120px;
        }

        .deliveboo-logo {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30%;
            height: 60px;
            
            img {
                width: 200px;
                object-fit: cover;
                height: 200px;
                position: relative;
                top: -10px;
            }
        }

        .nav-links {
            
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
                    width: 25%;
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

        .hamburger-menu{
            display: none;
            @media screen and (max-width: 800px){
                width: 20%;
                
                order: -1;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                
                .btn{
                    height: 50px;
                    border: 3px solid rgba(255, 255, 255, 0.603);
                    width: 50px;
                    border-radius: 100%;
                    &:hover{
                        background-color: rgba($color: #FFC245, $alpha: .35);
                    }
                }
            }

        }
        .user-interactions {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            position: relative;
            
            @media screen and (max-width: 500px) {  
                width: 20%;   
                align-items: center;
                justify-content: center;
            }
            
            span.login-btn{
                border: 2px solid;
                border-color: rgba($color: #ffffff, $alpha: .6);
                width: 80px;
                border-radius: 15px;
                height: 30px;
                z-index: 1;
                text-align: center;
                transition: 200ms;
                padding: 0 .5rem;
                margin-left: 10px;
            }
            .login-btn {
                border: 2px solid;
                border-color: rgba($color: #ffffff, $alpha: .6);
                width: 80px;
                border-radius: 15px;
                height: 30px;
                z-index: 1;
                text-align: center;
                transition: 200ms;
                @media screen and (max-width: 500px) {
                    display: none;
                }
                &.type-2{
                    display: none;
                    
                    @media screen and (max-width: 500px) {     
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        height: 50px;
                        
                        border-radius: 100%;
                    }
                }
                

                &:hover {
                    background-color: rgba($color: #FFC245, $alpha: .35);
                    color: #ffff;
                }

            }
            .login-cta {
                font-family: 'Great Vibes', cursive;
                color: #ffdd44;
                font-size: 1.5rem;
                position: absolute;
                width: 160px;
                top: -10px;
                left: 60%;
                transform: translateX(-50%);
                z-index: 2;
                @media screen and (max-width: 500px) {
                    display: none;  
                }

            }

        }
    }

}

// MEDIA QUERIES


@media screen and (max-width: 800px) {
    .container{
        .deliveboo-logo{
            min-width: 40%;
            height: 100%;
           
        }
        .nav-links {
            display: none;
        }
    }

}

@media screen and (min-width: 800px) {

    
    
}

@media screen and (max-width: 992px) {
    .nav-links ul li {
        font-size: 0.8rem;
    }
}
</style>

