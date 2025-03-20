<script setup>
import { ref, inject } from 'vue'
import axios from 'axios'
import { RouterLink, useRouter } from 'vue-router'

const GlobalStore = inject('GlobalStore')
const router = useRouter()
const enCours = ref(false)
const errorMsg = ref('')
const displaypswd = ref(false)

const nom = ref('MUSK')
const email = ref('elon@free.fr')
const password = ref('elonMusk')

const handleSubmit = async () => {
  const userData = { email: email.value, username: nom.value, password: password.value }
  console.log('newuser >>> ', userData)
  if (email.value === '' || nom.value === '' || password.value === '') {
    alert(
      'tous les champs doivent être remplis, et le mot de passe doit avoir au moins 6 caractères',
    )
    return
  }
  enCours.value = true
  try {
    const { data } = await axios.post(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local/register',
      userData,
    )
    GlobalStore.changeToken(data.jwt) // je stocke le token dans le magasin central ..;
    router.push({ name: 'home' }) // je reviens vers la page d'accueil

    console.log('jwt>>>', data.jwt)
  } catch (error) {
    console.log('Catch: >>>', error.response.data.error.message)
    errorMsg.value = error.response.data.error.message
  }
  enCours.value = false
}
</script>

<template>
  <main>
    <div class="wrapper">
      <h1>Bonjour !</h1>
      <p>Inscrivez-vous pour découvrir toute nos fonctionalités.</p>
      <form @submit.prevent="handleSubmit">
        <label for="nom">Nom<sup>*</sup> <input type="text" v-model="nom" /></label>
        <label for="email">E-mail<sup>*</sup> <input type="email" v-model="email" /></label>
        
          <label for="password"
            >Mot de passe<sup>*</sup> <input :type="displaypswd? 'text':'password'" v-model="password"
          /><span><font-awesome-icon :icon="['far', 'eye-slash']" v-if="!displaypswd" @click="displaypswd=!displaypswd"/><font-awesome-icon :icon="['far', 'eye']" v-else @click="displaypswd=!displaypswd"/></span></label>
         
       
        <button v-if="enCours">Inscription en cours...</button>
        <button v-else>S'inscrire</button>
      </form>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <div>
        Vous avez déjà un Comte ? <span><RouterLink to="/login"> Connectez-vous</RouterLink></span>
      </div>
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
  background-image: url('./img/illustration.png');
}

p,
label {
  display: block;
  font-size: 14px;
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
