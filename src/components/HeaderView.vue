<script setup>
import BtnPublishOffer from '@/components/BtnPublishOffer.vue'
</script>

<template>
  <main>
    <section class="wrapper">
      <div class="topMenuLine">
        <div><img style="width: 170px" src="../assets/img/logo.svg" alt="LogoLeboncoin" /></div>
        <div class="midmenu">
          <BtnPublishOffer />
          <div >
            <input type="text" name="search" id="search" placeholder="Rechercher sur leboncoin"/>
            <font-awesome-icon :icon="['fas', 'search']" class="lens"/>
          </div>
        </div>
        <div class="connect">
          <font-awesome-icon :icon="['far', 'user']" />
          <p>Se connecter</p>
          <!-- <font-awesome-icon :icon="['fas', 'sign-out-alt']" /> -->
        </div>
      </div>
      <div class="bottomMenuLine">
        <p>Immobilier</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Véhicules</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Locations de vacances</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Emploi</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Mode</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Maison & Jardin</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Famille</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Electronique</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>loisir</p>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <p>Autres</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.topMenuLine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}
.bottomMenuLine {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.bottomMenuLine >svg{
  font-size:4px;
}
.midmenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.midmenu >div {
  background-color: var(--lightgrey);
  padding: 5px 7px;
  /* border: 1px solid black; */
  display: flex; align-items: center;
  border-radius: 5px;
}
input { 
 border: none;
 outline: none;
 width: 250px;
 background-color: var(--lightgrey);
}
.lens {
  background-color: var(--orange);
  color: white;
  padding: 5px;
  font-size: 24px;
  border-radius: 5px;
}
.connect{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}
.connect >svg {
  font-size: 16px;
  padding: 5px;
  box-sizing: content-box;
}
section {
  background-color: white;
  width: 1055px;
  height: 110px;
  margin: 0 auto;
}
</style>
