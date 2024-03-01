<script>
import ProjectCard from './ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',
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
    <div>
        <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
    </div>
</template>

<style lang="scss"></style>