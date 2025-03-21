<script setup>
import BtnAcheter from './BtnAcheter.vue';

</script>

<template>
  <div class="maindiv">
    <img src="../assets/img/onde-corail.svg" alt="" />
    <div>
      <p>C'est le moment de vendre</p>
      <BtnAcheter :title="'Déposer une annonce'" :couleur="'--orange'"/>
    </div>
    <img src="../assets/img/feuille-bleue.svg" alt="" />
  </div>
</template>

<style scoped>
.maindiv {
  display: flex;
  align-items: center;
  background-color: #FD9E80;
  background : linear-gradient(90deg, #fed2c5, #FD9E80);
  border-radius: 20px;
  position: relative ;
  z-index: 3;
  margin-bottom: 20px;
  font-weight: bold;
}
div > div {
   display  :flex;
   align-items: center;
   gap : 20px;
    position: relative ;
    z-index: 0
}
img:first-child {
    border-radius: 20px 0 0 20px;
}
img:last-child {
    border-radius: 0 20px 20px 0
}
</style>
