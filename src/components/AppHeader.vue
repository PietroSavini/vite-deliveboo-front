<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            search: false,
            headerHeight:false,
            searchResults:'',
        }

    },
    methods:{
        //cambio il valore di search
        show(){
           this.search = !this.search;
        },
        searchBar(){
            this.headerHeight = !this.headerHeight;
            if(this.search !== true && this.headerHeight){
                this.search = !this.search
                
            }else{
                setTimeout(this.show,1000);  
            }
        }

    }

}
</script>

<template>
    <header class="">
        <div :class="headerHeight? '':'header-extends'" class="container d-flex py-2">
            <div class="deliveboo-logo d-flex align-items-center">
                Deliveboo
            </div>
            <nav>
                <ul class="d-flex align-items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Ristoranti</a></li>
                    <li><a href="#">Contattaci</a></li>
                    <li @click="searchBar"><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></li>
                </ul>
                <div>
                    <input v-model="searchResults" class="px-3" type="search" name="" id="" :class="search ? 'show' : 'hidden'">
                </div>
            </nav>
            <div class="user-interactions d-flex ">
                <a href="#">
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
    border: 1px solid black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    

    .container {
        margin: 0 auto;
        width: 80%;
        max-width: 1300px;
        border: 1px solid black;
        height: 80px;
        transition: 500ms;
        &.header-extends{
            height: 120px;
        }
        .deliveboo-logo {
            border: 1px solid red;
            width: 20%;
            height: 60px;
            font-size: 2.5rem;
            font-family: 'Great Vibes', cursive;

            img {
                width: 50%;
            }
        }

        nav {
            width: 60%;
            &>div{
                
                display: flex;
                justify-content: center;
                padding: .5rem 0;
                input{
                    width: 100%;
                    border-radius: 30px;
                    outline: none;
                    border:1px solid black;
                    transition: opacity 200ms;
                    &.hidden{
                        opacity: 1;
                    }
                    &.show{
                        
                        opacity: 0;
                    }

                }
            }

            ul {
                border: 1px solid green;
                height: 60px;
                border-radius: 30px;
                cursor: pointer;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20%;
                    border-right: 1px solid green;

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

                    a {
                        width: 100%;
                        text-align: center;
                        display: inline-block;
                        color: inherit;
                        border-radius: 20px;
                    }
                }
            }
        }

        .user-interactions {
            border: 1px solid red;
            width: 20%;
            justify-content: end;
            align-items: center;
            height: 60px;

            .login-btn{
                border: 1px solid black;
                position: relative;
                width: 60px;
                border-radius: 15px ;
                height: 30px;
                z-index: 1;
                text-align: center;

                .login-cta {
                    font-family: 'Great Vibes', cursive;
                    font-size: 1rem;
                    transform: rotate(-5deg);
                    position: absolute;
                    width: 100px;
                    top: -10px;
                    left: -25px;
                    z-index: 2;

    
                }
            }

        }
    }

}</style>

