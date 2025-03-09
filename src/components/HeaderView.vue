<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <section class="wrapper">
      <div>
        <div><img style="width: 170px" src="../assets/img/logo.svg" alt="LogoLeboncoin" /></div>
        <div class="midmenu">
            
          <button><font-awesome-icon :icon="['far', 'plus-square']" /> Déposer une annonce</button>
          <div><input type="text" name="search" id="search"/></div>
          <div></div>
        </div>
        <div>Se connecter</div>
        <font-awesome-icon :icon="['fas', 'search']" />
        <font-awesome-icon :icon="['far', 'user']" />
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
      </div>
      <div class="lowmenu">
       <p>Immobilier</p>
        <font-awesome-icon :icon="['fas', 'circle']" /><p>Véhicules</p>
        <font-awesome-icon :icon="['fas', 'circle']" /> <p>Locations de vacances</p>
        <font-awesome-icon :icon="['fas', 'circle']" /> <p>Emploi</p>
        <font-awesome-icon :icon="['fas', 'circle']" /><p>Mode</p>
        <font-awesome-icon :icon="['fas', 'circle']" /> <p>Maison & Jardin</p>
        <font-awesome-icon :icon="['fas', 'circle']" /><p>Famille</p>
        <font-awesome-icon :icon="['fas', 'circle']" /><p>Electronique</p>
        <font-awesome-icon :icon="['fas', 'circle']" /> <p>loisir</p>
        <font-awesome-icon :icon="['fas', 'circle']" /><p>Autres</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.lowmenu > p {
  font-size: 12px;
}
.midmenu {
  display: flex;
  flex-direction: row;
}
section > div {
  display: flex;
  justify-content: space-between;
}

</style>
