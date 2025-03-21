import './assets/main.css'

import VueCookies from 'vue-cookies'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSignOutAlt,
  faSearch,
  faCircle,
  faCaretLeft,
  faCaretRight,
  faMapMarkerAlt,
  faCheckDouble,
  faClock,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  faUser,
  faPlusSquare,
  faHeart,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faSignOutAlt,
  faUser,
  faPlusSquare,
  faSearch,
  faCircle,
  faHeart,
  faCaretLeft,
  faCaretRight,
  faMapMarkerAlt,
  faCheckDouble,
  faClock,
  faEyeSlash,
  faEye,
  faArrowRight,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(VueCookies, { secure: true })
app.use(router)

const userInfos = ref($cookies.get('userInfos') || null)
// console.log("userInfos >>> ",userInfos.value)

const changeUserInfos = (userinfos) => {
  userInfos.value = userinfos
}

app.provide('GlobalStore', {
  userInfos: userInfos,
  changeUserInfos: changeUserInfos,
})

app.mount('#app')
