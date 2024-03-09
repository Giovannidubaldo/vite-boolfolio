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
    <div class="col-4 mt-5">
        <div class="card h-100">
            <img :src="getImage()" alt="" class="card-img-top h-100">
            <div class="card-body">
                <router-link :to="{name: 'single-card', params: {slug: project.slug}}" class="text-decoration-none">
                    <h4 class="text-center text-capitalize text-success">{{project.name}}</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>