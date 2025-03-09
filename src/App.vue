<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderView.vue'
</script>

<template>
  <header>
    <Header />
  </header>

  <p>Hello world</p>

  <RouterView />
</template>

<style scoped></style>
