<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Singlecard',
    data(){
        return{
            store,
            project: [],
        }
    },
    created(){
        this.getSingleProject();
    },
    methods:{
        getSingleProject(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response)=>{
                this.project = response.data.results
            });
        },
        getImage() {
            let image;
            if (this.project.image != null) {
                image = `${this.store.baseUrl}/storage/${this.project.image}`;
            }
            else {
                image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
            }

            return image;
        }
    }
}
</script>

<template lang="">
    <div class="container my-4">
        <div class="row">
            <h2 class="text-center text-capitalize">{{project.name}}</h2>
            <div class="col-6 px-5 mt-5">
                <h2>Info:</h2>
                <ul class="list-unstyled">
                    <li>
                        <span><strong>Nome:</strong></span> {{ project.name }}
                    </li>
                    <li>
                        <span><strong>Data di inzio progetto:</strong></span> {{ project.start_date }}
                    </li>
                    <li>
                        <span><strong>Data di fine progetto:</strong></span> {{ project.end_date }}
                    </li>
                </ul>
                <h2><strong>Descrizione:</strong></h2>
                <p>{{ project.description }}</p>
                <h2><strong>Caratteristiche:</strong></h2>
                <ul class="list-unstyled">
                    <li class="d-flex">
                        <span class="mt-2"><strong>Tecnologia:</strong></span> 
                        <ul class="list-unstyled ms-4">
                            <li v-for="technology, index in project.technology">
                                <span class="badge rounded-pill text-bg-success">{{technology.name}}</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <!-- <span><strong>Tipo:</strong></span> {{ project.type.name }} -->
                    </li>
                </ul>
            </div>
            <div class="col-6 ps-5 mt-5">
                <div class="img-card">
                    <img :src="getImage()" alt="" class="img-fluid h-100 w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    ul{
        li{
            margin-top: 10px
        }
    }
    .img-card {
            height: 300px;
            width: 500px;
            box-shadow: 5px 5px 5px 5px grey;
        }
</style>