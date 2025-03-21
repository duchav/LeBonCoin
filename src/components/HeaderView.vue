<script setup>
import { RouterLink } from 'vue-router'
import BtnAcheter from './BtnAcheter.vue';
import { inject } from 'vue'
const GlobalStore = inject('GlobalStore')

const handleQuit = () => {
  GlobalStore.changeUserInfos(null)
  $cookies.remove('Userinfos')
}
</script>

<template>
  <main>
    <section>
      <div class="topMenuLine">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img style="width: 170px" src="../assets/img/logo.svg" alt="LogoLeboncoin" />
          </RouterLink>
        </div>
        <div class="midmenu">
          <BtnAcheter :title="'Déposer une annonce'" :couleur="'--orange'"/>
          <div>
            <input type="text" name="search" id="search" placeholder="Rechercher sur leboncoin" />
            <font-awesome-icon :icon="['fas', 'search']" class="lens" />
          </div>
        </div>
        <div class="endmenu">
          <RouterLink :to="{ name: 'login' }" class="connect" v-if="!GlobalStore.userInfos.value">
            <font-awesome-icon :icon="['far', 'user']" />Se connecter</RouterLink
          >

          <div v-else>
            <div>
              <font-awesome-icon :icon="['far', 'user']" />
              {{ GlobalStore.userInfos.value.userName }}
            </div>
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" v-on:mousedown="handleQuit" />
          </div>
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
section {
  background-color: white;
  width: 1055px;
  height: 110px;
  margin: 0 auto;
}
.topMenuLine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}

.midmenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.midmenu > div {
  background-color: var(--lightgrey);
  padding: 5px 7px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
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
.lens:hover {
  cursor:pointer
}
.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.connect > svg {
  font-size: 18px;
  padding: 5px;
  box-sizing: content-box;
}
.endmenu > div {
  display: flex;
  gap: 15px;
  font-size: 20px;
  align-items: center;
}
.endmenu > div > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}
.endmenu > div > div > svg {
  font-size: 20px;
}
.endmenu > div > svg:hover {
  cursor: pointer;
}

.bottomMenuLine {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.bottomMenuLine > svg {
  font-size: 4px;
}
</style>
