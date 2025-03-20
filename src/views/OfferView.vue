<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
import { useCycleList } from '@vueuse/core'

import Boutonorange from '../components/BtnAcheter.vue'

const offerDetails = ref({})
const numero = ref(0)    // pour le carousel alternatif...

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`,
    )
    // console.log(data)
    offerDetails.value = data.data
    // console.log(offerDetails.value.attributes.pictures.data.length)
  } catch (error) {
    console.log(error)
  }
})

const formatedDate = computed(() => {
  return offerDetails.value.attributes.publishedAt.split('T')[0].split('-').reverse().join('/')
})

const carousel = computed(() => {
  const { state, next, prev } = useCycleList(offerDetails.value.attributes.pictures.data)
  return { state, next, prev }
})
</script>

<template>
  <p v-if="!offerDetails.id">Chargement en cours...</p>
  <section v-else class="wrapper">
    <div class="offre">
      <div class="firstcol">
        <div class="firstcolfirstline">
          <span
            ><font-awesome-icon
              :icon="['fas', 'caret-left']"
              class="carretleft"
              @click="carousel.prev()"
          /></span>
          <p><img :src="carousel.state.value.attributes.url" alt="pas d'image" /></p>
          <span
            ><font-awesome-icon
              :icon="['fas', 'caret-right']"
              class="carretright"
              @click="carousel.next()"
          /></span>
          <!-- 
          ALTERNATIVE SIMPLE CAROUSEL
          <span v-if="numero > 0"
            ><span v-on:click="numero -= 1"
              ><font-awesome-icon :icon="['fas', 'caret-left']" class="carretleft" /></span
          ></span>
          <img
            :src="offerDetails.attributes.pictures.data[numero].attributes.url"
            alt="pas d'image"
            v-if="offerDetails.attributes.pictures.data[numero]"
          />
          <span v-if="numero < offerDetails.attributes.pictures.data.length - 1"
            ><span v-on:click="numero += 1"
              ><font-awesome-icon :icon="['fas', 'caret-right']" class="carretright" /></span
          ></span> -->
        </div>
        <h2>{{ offerDetails.attributes.title }}</h2>
        <h3>{{ offerDetails.attributes.price }} €</h3>
        <h4>{{ formatedDate }}</h4>
        <div class="lineacross"></div>
        <h3>Description:</h3>
        <span>{{ offerDetails.attributes.description }}</span>
        <div class="lineacross"></div>
        <h5><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Agon-Coutainville (50330)</h5>
      </div>

      <div class="secondcol">
        <div>
          <img
            v-if="offerDetails.attributes.owner.data.attributes.avatar.data"
            :src="offerDetails.attributes.owner.data.attributes.avatar.data.attributes.url"
            alt=""
          />
          <p>{{ offerDetails.attributes.owner.data.attributes.username }}</p>
        </div>
        <p class="piece">
          <span><font-awesome-icon :icon="['fas', 'check-double']" /></span>Pièce d'identité
          vérifiée
        </p>
        <p class="piece2">
          <span><font-awesome-icon :icon="['fas', 'clock']" /></span>Répond généralement en 1 heure
        </p>
        <div>
          <div></div>
          <boutonorange :title="'Acheter'" :couleur="'--orange'" />
          <boutonorange :title="'Message'" :couleur="'--navyblue'" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 1055px;
  margin: 0 auto;

  overflow: hidden;
}
.offre {
  display: flex;
  height: 100vh;
  justify-content: space-between;
  gap: 20px;
}
.firstcol {
  width: 60%;
}
.firstcolfirstline {
  display: flex;
  justify-content: center;

  align-items: center;
  position: relative;
}

img {
  height: 400px;
  object-fit: cover;
}
.carretleft {
  font-size: 40px;
  position: absolute;
  left: 5%;
}
.carretright {
  font-size: 40px;
  position: absolute;
  right: 5%;
}
h2 {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
}
h3 {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
}
h4 {
  font-size: 14px;
  color: var(--darkgrey);
  padding: 0px 0 20px 0;
}
h5 {
  font-size: 14px;
  color: black;
  padding: 10px 0 20px 0;
}
.lineacross {
  margin-top: 10px;
  border-bottom: 1px solid var(--darkgrey);
}
.secondcol {
  margin: 5px 5px 0 0;
  width: 35%;
  height: 400px;
  /* border: 1px solid black; */
  box-sizing: border-box;
  box-shadow: 0 0 5px 2px rgb(211, 211, 211, 0.4);
  padding: 15px;
  border-radius: 10px;
}
.secondcol > div:first-child {
  display: flex;
  gap: 20px;
}
.secondcol > div > img {
  height: 60px;
  border-radius: 50%;
}
.secondcol > div > p {
  font-weight: bold;
}

.piece {
  display: inline-block;
  background-color: var(--lightorange);
  padding: 5px;
  margin-top: 10px;
  border-radius: 20px;
  color: var(--darkorange);
  font-size: 12px;
}
.piece > span {
  padding: 4px;
}
.piece2 {
  padding: 5px;
  margin-top: 10px;
  border-radius: 20px;
  font-size: 14px;
}
.piece2 > span {
  padding: 3px;
  font-size: 14px;
}
.secondcol > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 70px;
}
.secondcol > div > div {
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: 50px;
  border-top: 1px solid lightgrey;
}
</style>
