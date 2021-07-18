<template>
  <div>
    <GameHeader></GameHeader>
    <router-view></router-view>
    <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import GameHeader from "./layout/GameHeader.vue";
import Loading from "./layout/Loading.vue";
export default {
    computed: {
        loading () {
            return this.$store.getters.loading
        }
    },
    components: {
        GameHeader,
        Loading,
    },
    mounted() {
      let that = this;
      this.axios.get('map', {withCredentials: true})
      .then(function (response){
        that.$store.dispatch('setMap', {
            map: response.data
        })
      })
      .catch(function (error) {
        console.log("Map failed to load " + error);
      })
    }
}
</script>
