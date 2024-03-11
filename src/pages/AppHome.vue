<script>
export default {
    name: 'home'
}
</script>

<template lang="">
    <div class="bg-grey">
        <div class="container">
            <div class="row">
                <i class="fa-regular fa-folder-open text-center"></i>
                <h1 class="text-center text-uppercase"> Boolfolio </h1>
                <p class="text-center"> Il tuo portafoglio di progetti creati e tanto altro! </p>
            </div>
        </div>
    </div>
    
    <section class="article my-5">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center my-5">
                <div class="col-8 d-flex justify-content-center">
                    <img src="../assets/web-design.jpg" alt="">
                </div>
                <div class="col-4 d-flex flex-column">
                    <h2>Search your Projects!</h2>
                    <span>Cerca i tuoi progetti in base alla tecnologia usata.</span>
                    <span class="mt-3">
                        Grazie al nostro filtro puoi vedere i tuoi progetti in base alla tipologia di progetto che possiedono: <br>
                        HTML, CSS, JS, VueJs, Laravel, PHP!
                    </span>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-4 d-flex justify-content-center flex-column">
                    <h2>Watch your progress!</h2>
                    <span>
                        Guarda i progressi che hai fatto durante il corso di 6 mesi con Boolean. <br>
                        Partendo da zero sei riuscito a creare un tuo portfolio di progetti sia frontend che backend <br>
                        Grazie al nostro portale puoi visionare tutti i tuoi progetti a partire dal primo in assoluto, fino all'ultimo progetto che creerai nella tua carriera da sviluppatore web!
                    </span>
                </div>
                <div class="col-8 d-flex justify-content-center">
                    <img src="../assets/web-developer.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .bg-grey{
        background-color: #272a2b;
        color: #fff;
        padding: 50px 0;

        i{
            font-size: 50px,
        }    
    }   

    .article{
        max-width: 1000px;
        margin: 0 auto;

        img{
            height: 300px;
            width: 600px;
        }
    }
</style>