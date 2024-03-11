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
                    <div class="d-flex align-items-center">
                        <div class="logo">
                            <img src="" alt="" class="img-fluid">
                        </div>
                        <h2>
                            Boolfolio
                        </h2>
                    </div>
                    <ul class="list-unstyled d-flex">
                        <li v-for="item, index in store.menuHeader" :key="index">
                            <router-link :to="{name: item.name}">{{item.label}}</router-link>
                        </li>
                    </ul>
                    <ul class="list-unstyled d-flex">
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    
</style>