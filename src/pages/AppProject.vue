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
        }
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.results;
            })
        }
    }
}
</script>

<template lang="">
    <div class="container my-5">
        <div class="row">
            <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
        </div>
    </div>
</template>

<style lang="scss"></style>