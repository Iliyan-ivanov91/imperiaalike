import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
import Axios from 'axios'

Vue.use(Vuex)
//Axios setup. Add new config for production
const axiosConfig = {
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 30000,
};
Vue.prototype.axios = Axios.create(axiosConfig);

export default new Vuex.Store({
  state: {
    userProfile: {},
    error: null,
    loading: false,
    map: {
      mapTiles: [],
    }
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }, 
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setMapTiles (state, payload) {
      state.map.mapTiles = payload
    }
  },
  actions: {
    async login({ dispatch, commit }, form) {
      commit('setLoading', true)
      commit('clearError')
      fb.auth.signInWithEmailAndPassword(form.email, form.password)
      .then( ({ user }) => {
        commit('setLoading', false)
        return user.getIdToken().then((idToken) => {
          Axios.post(process.env.VUE_APP_SERVER_URL + 'sessionLogin', {idToken: idToken}, {withCredentials: true})
          .then(function (response){
            router.push('/game/map')
          })
          .catch(function (error) {
            commit('setError', "Something went wrong! Please try again later.")
          })
        });
      })
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
      // on success send tokenId to Djolev and load game with response data (all user stuff)
    },
    async logout() {
      await fb.auth.signOut().then(function(){
        router.push('/lobby')
      })
    },
    async signup({ dispatch, commit }, form) {
      commit('setLoading', true)
      commit('clearError')
      fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      .then( ({ user }) => {
        commit('setLoading', false)
        return user.getIdToken().then((idToken) => {
          Axios.post(process.env.VUE_APP_SERVER_URL + 'sessionLogin', {idToken: idToken})
          .then(function (response){
            router.push('/game')
          })
          .catch(function (error) {
            commit('setError', "Something went wrong! Please try again later.")
          })
        });
      })
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    async fetchUserProfile({ commit }, user) {
      commit('setUserProfile', user)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    setMap ({commit}, map) {
      commit('setLoading', true)
      commit('setMapTiles', map)
      setTimeout(() => {
        commit('setLoading', false)
      }, 2000)
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    mapTiles (state) {
      return state.map.mapTiles
    }
  }
})