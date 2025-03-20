<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  offerInfos: Object,
})

const formatedDate = computed(() => {
  return props.offerInfos.attributes.publishedAt.split('T')[0].split('-').reverse().join('/')
})
</script>

<template>
  <main>
    <RouterLink :to="{ name: 'offer', params: { id: offerInfos.id } }">
      <section>
        <div class="upperpart">
          <div class="veryfirst">
            <img
              class="avatar"
              :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url"
              alt="Avatar"
              v-if="offerInfos.attributes.owner.data.attributes.avatar.data"
            />
            <p>{{ offerInfos.attributes.owner.data.attributes.username }}</p>
          </div>
          <img
            class="offre"
            :src="offerInfos.attributes.pictures.data[0].attributes.url"
            alt="phot de l'offre"
          />
          <div>{{ offerInfos.attributes.title }}</div>
          <div>{{ offerInfos.attributes.price }} €</div>
        </div>
        <div class="ligneDuBas">
          <div>{{ formatedDate }}</div>
          <font-awesome-icon :icon="['far', 'heart']" />
        </div>
      </section>
    </RouterLink>
  </main>
</template>

<style scoped>
section {
  width: calc((100%-60px) / 5);
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
}
.veryfirst {
  display: flex;
  align-items: center;
  gap: 5px;
}
.veryfirst > p {
  margin-top: 7px;
}
.upperpart {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
div {
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 2px;
}
.offre {
  width: 198px;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
}
.ligneDuBas {
  display: flex;
  justify-content: space-between;
  color: var(--darkgrey);
}
</style>
