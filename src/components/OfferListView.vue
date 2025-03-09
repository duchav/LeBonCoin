<script setup>
const props = defineProps({
  offerInfos: Object
})
console.log("Avatar=>>>",props.offerInfos.attributes)
console.log("=>>>",props.offerInfos.attributes.pictures.data[0].attributes.url)
</script>

<template>
  <main>
    <section>
      <p><img class="avatar" :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url" alt="Avatar" /> {{ offerInfos.attributes.owner.data.attributes.username }}</p>
      <div>{{offerInfos.attributes.title}}</div>
      <div>{{offerInfos.attributes.price}} €</div>
      <img class="offre" :src="offerInfos.attributes.pictures.data[0].attributes.url" alt="phot de l'offre" />
      <div class="ligneDuBas">
        <div>date de publication</div>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  border: 1px solid black;
  width: 200px;
  height: 250px;
}
.avatar {
  width: 30px;
  height:30px;
  border-radius: 50%;
  padding: 2px;
}
.offre {
  width: 120;
  height:140px;
  object-fit: cover;
}
.ligneDuBas {
  display: flex;
  justify-content: space-between;
}
</style>
