<template>
  <div>
    <GameHeader></GameHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import GameHeader from "./layout/GameHeader.vue";
export default {
    components: {
        GameHeader,
    },
}
</script>
