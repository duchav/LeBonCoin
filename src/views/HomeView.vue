<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import OfferListView from '../components/OfferListView.vue'
import TimeToSell from '../components/TimeToSell.vue'

const offersList = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar`,
    )
    //console.log(data.data)

    offersList.value = data.data
    //console.log("nb d'offres", offersList.value.length )
    //console.log('title>>>', offersList.value[0].attributes.title)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <p v-if="offersList.length === 0">Chargement en cours ...</p>
  <main v-else class="wrapper">
    <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
    <TimeToSell/>
    <div><OfferListView v-for="offer in offersList" :key="offer.id" :offerInfos="offer" /></div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.wrapper {
  width: 1055px;
  margin: 0 auto;
  /* border: 3px dotted rgb(14, 39, 233); */
}
h1 {
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
}
</style>
