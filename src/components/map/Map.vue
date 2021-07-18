<template>
    <div class="w-screen h-screen overflow-hidden" v-dragscroll>
        <div class="flex flex-wrap map-wrapper" v-dragscroll>
            <MapTile v-for="tile in mapTiles.map"
                    :key="tile.id"
                    :tile="tile.type"
            ></MapTile>
        </div>
    </div>
</template>

<script>
import MapTile from "./MapTile.vue"
export default {
    components: {
        MapTile
    },
    computed: {
        mapTiles() {
            return this.$store.getters.mapTiles
        }
    }
}
</script>

<style scoped>
.map-wrapper {
    width:2000px;
    height: 2000px;
}
</style>