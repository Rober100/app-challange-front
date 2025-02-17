import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.css"

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap"
