<script>
export default {
    name: 'ContactForm'
}
</script>

<template lang="">
    <div>
        <form action="sendform()" method="post">
            <div class="row">
                <div class="col-6 mb-2">
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Nome" class="form-control" required v-model="name">
                </div>
                <div class="col-6 mb-2">
                    <label for="surname">Cognome</label>
                    <input type="text" id="surname" name="surname" placeholder="Cognome" class="form-control" required v-model="surname">
                </div>
                <div class="col-6 mb-2">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email" class="form-control" required v-model="email">
                </div>
                <div class="col-6 mb-2">
                    <label for="phone">Telefono</label>
                    <input type="text" id="phone" name="phone" placeholder="Telefono" class="form-control" required v-model="phone">
                </div>
                <div class="col-6 my-2">
                    <textarea name="message" id="message" cols="30" rows="10" class="form-control" v-model="message" placeholder="Messaggio"></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-sm btn-success" type="submit">Invia</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="">
    
</style>