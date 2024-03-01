<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',
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
                console.log(response.data.results);
            })
        }
    }
}
</script>

<template lang="">
    <div>
        
    </div>
</template>

<style lang="scss"></style>