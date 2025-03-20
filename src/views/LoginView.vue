<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router=useRouter()

const GlobalStore = inject('GlobalStore')

const email = ref('vance@free.fr')
const password = ref('azerty')
const ErrMsg = ref('')
const NoSearch = ref(true)

const handleSubmit = async () => {
  const userData = {
    identifier: email.value,
    password: password.value,
  }

  console.log(userData)
  NoSearch.value = false
  try {
    if (!userData.identifier || !userData.password) {
      alert('Veuillez remplr tous les champs')
    }
    const { data } = await axios.post(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
      userData,
    )
    console.log('jwt = ', data.jwt)
    GlobalStore.changeToken(data.jwt)
    router.push({name: 'home'})
  } catch (error) {
    console.log('Catch: >>>', error.response.data.error.message)
    ErrMsg.value = error.response.data.error.message
  }
  NoSearch.value = true
}
</script>
<template>
  <main>
    <div class="wrapper">
      <h1>Bonjour !</h1>
      <p>Connectez-vous pour découvrir toute nos fonctionalités.</p>
      <form @submit.prevent="handleSubmit">
        <label for="email"
          >Email<input
            v-on:mouseenter="ErrMsg = ''"
            type="text"
            name="email"
            placeholder="your email"
            v-model="email"
        /></label>
        <label for="password"
          >Mot de passe<input
            type="password"
            name="password"
            placeholder="your password"
            v-model="password"
            v-on:mouseenter="ErrMsg = ''"
        /></label>
        <button v-if="NoSearch">S'inscrire</button>
        <button v-else>Connexion en cours...</button>
        <p v-if="ErrMsg">Un problème est survenu, veuillez essayer à nouveau</p>

        <div>
          Envie de nous rejoindre ?
          <span><RouterLink to="/signup">Créez un compte</RouterLink></span>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh);
  background-image: url("../assets/img/illustration.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  width: 400px;
  height: 450px;
  padding: 25px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  
}
p,
label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
h1 {
  font-weight: bold;
}
button {
  border: none;
  color: white;
  background-color: var(--orange);
  padding: 10px;
  border-radius: 10px;
  height: 36px;
  font-weight: bold;
}
button > svg {
  margin-right: 5px;
}
span {
  font-weight: bold;
  text-decoration: underline;
}
</style>
