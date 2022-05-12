import Vue from 'vue'
import App from './App.vue'
import { makeServer } from './server'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") makeServer()

new Vue({
  render: h => h(App),
}).$mount('#app')
