import './assets/main.css'

import VueCookies from 'vue-cookies'


import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSignOutAlt , faSearch, faCircle, faCaretLeft, faCaretRight, faMapMarkerAlt, faCheckDouble, faClock,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faUser, faPlusSquare, faHeart , faEyeSlash, faEye} from '@fortawesome/free-regular-svg-icons'

library.add (faSignOutAlt, faUser, faPlusSquare, faSearch, faCircle,faHeart,faCaretLeft, faCaretRight, faMapMarkerAlt, faCheckDouble, faClock,faEyeSlash, faEye,faArrowRight)

const app = createApp(App).component("font-awesome-icon",FontAwesomeIcon)

app.use(VueCookies,{secure:true})
app.use(router)

const userEmail = ref('')
const userToken = ref('')
const userName = ref('')

const changeToken =(token)=> {
    userToken.value = token
}
const changeUsername =(username)=> {
    userName.value = username
}
const changeUseremail =(email)=> {
    userEmail.value = email
}

app.provide('GlobalStore', { 
    userToken: userToken,
    username: userName,
    useremail: userEmail,
    changeToken: changeToken,
    changeUsername: changeUsername,
    changeUseremail: changeUseremail})

app.mount('#app')

