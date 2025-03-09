<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderView.vue'
</script>

<template>
  <header>
    <Header />
  </header>

<div class="wrapper"> 
  <RouterView />
</div>
 
</template>

<style scoped>

</style>
