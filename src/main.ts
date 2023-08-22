import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Animation On Scroll AOS 
import AOS from 'aos';
import 'aos/dist/aos.css'

// Animate.css
import 'animate.css';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowAltCircleRight, faEnvelope, faLocationDot, faPhone, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowAltCircleRight, faLocationDot, faPhone, faEnvelope, faFacebook, faTwitter, faInstagram, faLinkedin)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

AOS.init();


app.use(createPinia())
app.use(router)

app.mount('#app')
