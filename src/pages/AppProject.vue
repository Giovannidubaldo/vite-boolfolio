<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppProject',
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject(page) {
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: page
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        },
    }
}
</script>

<template lang="">
    <div class="container my-5">
        <div class="row">
            <h4>Ecco i tuoi progetti:</h4>
            <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
            <div class="col-12 my-5">
                <div class="d-flex justify-content-center">
                    <div>
                        <button :class="currentPage == 1 ? 'disabled' : 'btn'" @click=" getProject(currentPage - 1)"
                            class="btn"><i class="fa-solid fa-chevron-left"></i></button>
                    </div>
                    <div>
                        <button :class="currentPage == lastPage ? 'disabled' : 'btn'" @click="getProject(currentPage + 1)"
                            class="btn ms-2"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
button {
    background-color: #198754;;
    margin: 0 10px;

    &:hover {
        opacity: 0.5;
        background-color: #198754;;
    }
}
</style>