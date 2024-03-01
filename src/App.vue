<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template lang="">
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/generals.scss' as *;
</style>