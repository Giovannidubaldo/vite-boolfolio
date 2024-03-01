<script>
import { store } from '../store';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImage() {
            let image;
            if (this.project.image != null) {
                image = '/storage/' + this.project.image;
            }
            else {
                image = '/img/sfondo.jpg';
            }

            return `${this.store.baseUrl}${image}`;
        }
    }
}
</script>

<template lang="">
    <div class="col-4 mt-5">
        <div class="card">
            <img :src="getImage()" alt="" class="card-img-top">
            <div class="card-body">
                <h4 class="text-center text-capitalize">{{project.name}}</h4>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>