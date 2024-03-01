<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return
    }
}
</script>

<template lang="">
    <div class="col-4 mt-5">
        <div class="card">
            <img src="" alt="" class="card-img-top">
            <div class="card-body">
                <h4 class="text-center text-capitalize">{{project.name}}</h4>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>