import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSignOutAlt , faSearch, faCircle, faCaretLeft, faCaretRight, faMapMarkerAlt, faCheckDouble, faClock} from '@fortawesome/free-solid-svg-icons'
import { faUser, faPlusSquare, faHeart , faEyeSlash, faEye} from '@fortawesome/free-regular-svg-icons'

library.add (faSignOutAlt, faUser, faPlusSquare, faSearch, faCircle,faHeart,faCaretLeft, faCaretRight, faMapMarkerAlt, faCheckDouble, faClock,faEyeSlash, faEye)

const userToken = ref('')
const username = ref('')
const changeToken =(token)=> {
    userToken.value = token
}
const changeUsername =(username)=> {
    userName.value = username
}

const app = createApp(App).component("font-awesome-icon",FontAwesomeIcon)

app.use(router)
app.provide('GlobalStore', { 
    userToken: userToken,
    username: username,
    changeToken: changeToken,
    changeUsername: changeUsername
})
app.mount('#app')
