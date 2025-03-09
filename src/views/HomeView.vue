<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import OfferListView from '../components/OfferListView.vue'

const offersList = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar`
    )
    console.log(data.data)
    
    offersList.value = data.data
    console.log("nb d'offres", offersList.value.length )
    console.log('title>>>', offersList.value[0].attributes.title)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main>
    <div>1ere ligne</div>
    <div>2eme ligne</div>
    <div><OfferListView v-for="offer in offersList" :key="offer.id" :offerInfos="offer" /></div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
