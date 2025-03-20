<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderView.vue'
import Footer from './components/FooterView.vue'
</script>

<template>
  <header>
    <Header />
  </header>

  <div><RouterView /></div>

  <Footer />
</template>

<style scoped>
header {
  position: sticky;
  top: 0px;
  z-index: 1;
}
footer {
  position: sticky;
bottom:  0px;
  z-index: 1;
}
div {
  margin-top: 0px;
  position: relative;
  z-index: 0;
}
</style>
