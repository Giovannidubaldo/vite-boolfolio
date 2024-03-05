<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Singlecard',
    data(){
        return{
            store,
            project: null,
        }
    },
    created(){
        this.getSingleProject();
    },
    methods:{
        getSingleProject(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response)=>{
                this.project = response.data.project
            });
        }
    }
}
</script>

<template lang="">
    <div>
        <h2>{{project.name}}</h2>
    </div>
</template>

<style lang="">
    
</style>