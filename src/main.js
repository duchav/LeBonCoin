import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSignOutAlt , faSearch, faCircle, faCaretLeft, faCaretRight, faMapMarkerAlt, faCheckDouble, faClock} from '@fortawesome/free-solid-svg-icons'
import { faUser, faPlusSquare, faHeart } from '@fortawesome/free-regular-svg-icons'

library.add (faSignOutAlt, faUser, faPlusSquare, faSearch, faCircle,faHeart,faCaretLeft, faCaretRight, faMapMarkerAlt, faCheckDouble, faClock )

const app = createApp(App).component("font-awesome-icon",FontAwesomeIcon)

app.use(router)

app.mount('#app')
