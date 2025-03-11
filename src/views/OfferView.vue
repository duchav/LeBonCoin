<script setup>

import { onMounted, ref } from 'vue'
import axios from 'axios'

const offerDetails = ref({})
const numero = ref(0)

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
    console.log(data)
    offerDetails.value = data.data
    console.log(offerDetails.value.attributes.pictures.data.length)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <p v-if="!offerDetails.id">Chargement en cours...</p>
  <section v-else class="wrapper">
    <div>OFFER VIEW {{ id }}</div>
    <span v-if="numero > 0"
      ><span v-on:click="numero -= 1"
        ><font-awesome-icon :icon="['fas', 'caret-left']" class="carret" /></span
    ></span>
    <img
      :src="offerDetails.attributes.pictures.data[numero].attributes.url"
      alt="pas d'image"
      v-if="offerDetails.attributes.pictures.data[numero]"
    />
    <span v-if="numero < offerDetails.attributes.pictures.data.length - 1"
      ><span v-on:click="numero += 1"
        ><font-awesome-icon :icon="['fas', 'caret-right']" class="carret" /></span
    ></span>

    <p>{{ offerDetails.attributes.title }}</p>
   
    <p>{{ offerDetails.attributes.price }} €</p>
    <p>{{ offerDetails.attributes.publishedAt }}</p>
    <H2> DESCRIPTION</H2>
    <p>
      <span>{{ offerDetails.attributes.description }}</span>
    </p>
    <p> <font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Agon-Coutainville (50330)</p>
     <div>
      <p>{{ offerDetails.attributes.owner.data.attributes.username }}</p>
      <img v-if="offerDetails.attributes.owner.data.attributes.avatar.data" :src="offerDetails.attributes.owner.data.attributes.avatar.data.attributes.url" alt="" />
    </div>
    <div>
      <p><font-awesome-icon :icon="['fas', 'check-double']" />Pièce d'identité vérifiée</p>
      <p><font-awesome-icon :icon="['fas', 'clock']" />Répond généralement en 1 heure</p>
      <button>Acheter</button>
      <button>Message</button>
      
    </div>
  </section>
  
</template>

<style scoped>
.wrapper {
  width: 1055px;
  margin: 0 auto;
  border: 3px dotted rgb(14, 39, 233);
  overflow: hidden;
}
img {
  height: 300px;
}
.carret {
  font-size: 40px;
  margin: 90px 10px;
}
</style>
