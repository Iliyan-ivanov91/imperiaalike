import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import "./styles/main.css"
import VTooltip from 'v-tooltip'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import { auth } from './firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGoogle,faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Vue plugins
Vue.use(VTooltip);
Vue.use(VueRouter);
Vue.use(Vuex);

//Axios setup. Add new config for production
const axiosConfig = {
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 30000,
};
Vue.prototype.axios = Axios.create(axiosConfig);

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})
