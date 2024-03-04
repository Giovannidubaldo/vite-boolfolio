<script>
import { store } from '../store';
export default {
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-between align-items-center my-3">
                    <h2>
                        Boolfolio
                    </h2>
                    <ul class="list-unstyled d-flex">
                        <li v-for="item, index in store.menuHeader" :key="index">
                            <router-link :to="{name: item.name}">{{item.label}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="">
    
</style>