<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Game from "./components/Game.vue";
import Lobby from "./components/Lobby.vue";

export default {
  name: 'App',
  data() {
    return{
      User: {
        loggedIn: false
      },
    }
  },
  components: {
    Game,
    Lobby
  },
  mounted () {
    // this.axios.post('amILogged')
    //   .then(function (response){
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }
}
</script>

<style>

</style>
