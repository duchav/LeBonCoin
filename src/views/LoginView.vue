<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

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
    console.log('jwt = ', data)
    GlobalStore.changeToken(data.jwt)
    GlobalStore.changeUseremail(email)
    $cookies.set('userToken',data.jwt)
    router.push({ name: 'home' })
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
      <form @submit.prevent="handleSubmit">
        <div>
          <h1>Bonjour !</h1>
          <h2>Connectez-vous pour découvrir toute nos fonctionalités.</h2>
        </div>

        <label for="email"
          ><span>Email <sup>*</sup></span><input
            v-on:mouseenter="ErrMsg = ''"
            type="text"
            name="email"
            placeholder="your email"
            v-model="email"
        /></label>
        <label for="password"
          ><span>Mot de passe <sup>*</sup></span><input
            type="password"
            name="password"
            placeholder="your password"
            v-model="password"
            v-on:mouseenter="ErrMsg = ''"
        /></label>
        <button v-if="NoSearch">Se connecter   <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
        <button v-else>Connexion en cours...</button>
        <p class="alert" v-if="ErrMsg">Un problème est survenu, veuillez essayer à nouveau</p>

        <div>
          Envie de nous rejoindre ?
          <span><RouterLink to="/signup">Créer un compte...</RouterLink></span>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh);
  background-image: url('../assets/img/illustration.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-top: 20px;
  width: 480px;
  height: 490px;
  padding: 30px;
  
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 7px var(--med-grey);
}
p,
label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}
h2 {
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 15px;
}
form {
  height: 490px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
button {
  border: none;
  color: white;
  background-color: var(--orange);
  padding: 10px;
  border-radius: 15px;
  height: 45px;
  font-weight: bold;
}
button > svg {
  margin-right: 5px;
}
div> span {
  font-weight: bold;
  text-decoration: underline;
}
label {
  display: flex;
  gap: 5px;
}
input{
  border-radius: 15px;
  border: 1px solid black;
  height: 45px;
  padding-left: 15px;
}
input:focus{
  outline: none;
}
.alert{
  color: red;
  text-align: center;
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: 3;
  padding :10px
}
@keyframes example {
  0%{color: red;}
  49%{color: red;}
  50%{color: white;}
  100%{color: white;}
}
</style>
