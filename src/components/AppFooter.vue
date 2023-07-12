<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    },
    methods:{
      
    },
}
</script>

<template>
    <div class="ms_footer container-fluid ">
        
        <h2>Link Utili</h2>

        <div class="ms_links container d-flex flex-wrap">
            <div class="ms_link-column">
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
            </div>
            
            <div class="ms_link-column">
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
            </div>
            
            <div class="ms_link-column">
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
            </div>
            
            <div class="ms_link-column">
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
                <p>Popolami</p>
            </div>
        </div>

        <div class="ms_end-footer container d-flex">
            <div class="ms_social-icons">
                <p>Social Media:</p>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-square-reddit"></i>
                <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div class="ms_contacts d-flex">
                <p><strong>Contatti:</strong></p>
                <a href="">E-mail: delive.boo@gmoil.com</a>
                <a href="">Tel: 02-927 94 304</a>
                <a href="">Fax: 02-927 94 528</a>
            </div>
        </div>
    </div>

  
</template>

<style scoped lang="scss">

    .ms_footer {
        background-color: rgb(133, 40, 40);
        height: 20%;
        color: rgb(164, 231, 255);
        padding: 50px 20px 50px 20px;
    }

    .ms_links {
        justify-content: space-between;
    }
    .ms_link-column {
        border-left: 2px solid rgb(164, 231, 255);
        padding-left: 5px;
        padding-right: 5px;
        margin-right: 20px;
        margin-bottom: 20px;
        justify-content: space-between;
        p {
            margin-bottom: 5px;
            margin-left: 5px;
        }
    }

    .ms_end-footer {
        justify-content: space-between;
    }

    .ms_social-icons{
        i {
            font-size: 1.4rem;
            margin: 5px;
        }
    }

    .ms_contacts{
        flex-direction: column;
    }

    /* Stili per il cellulare */
    @media (max-width: 576px) {
        .ms_link-column {
            width: calc(100% / 2 - 40px);
    }
    }
</style>