<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    name: 'AppContactUs',
    components:{
        ContactForm,
    }
}
</script>

<template lang="">
    <div class="container my-4">
        <div class="row">
            <div class="col-12">
                <h1>Contatti</h1>
            </div>
            <div class="col-12 mt-4">
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>