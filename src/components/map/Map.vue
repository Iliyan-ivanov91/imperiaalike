<template>
    <div class="pt-24 flex items-center justify-center">
        <div class="map-wrapper flex flex-wrap">
            <MapTile v-for="tile in MapTiles"
                    :key="tile.id"
                    :tile="tile.tile"
                    :player="tile.player"
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
    data() {
        return {
            MapTiles:[
                {id: 1, tile: 1, player: false},
                {id: 2, tile: 2, player: false},
                {id: 3, tile: 6, player: {isPlayer: true, name:"Lobotomy"}},
                {id: 4, tile: 4, player: false},
                {id: 5, tile: 5, player: false},
                {id: 6, tile: 5, player: false},
                {id: 7, tile: 4, player: false},
                {id: 8, tile: 3, player: false},
                {id: 9, tile: 2, player: false},
                {id: 10, tile: 3, player: false},
                {id: 11, tile: 7, player: {isPlayer: true, name:"BigBangStarter"}},
                {id: 12, tile: 2, player: false},
                {id: 13, tile: 4, player: false},
                {id: 14, tile: 1, player: false},
                {id: 15, tile: 5, player: false},
                {id: 16, tile: 5, player: false},
                {id: 17, tile: 5, player: false},
                {id: 18, tile: 3, player: false},
                {id: 19, tile: 8, player: {isPlayer: true, name:"Phantasmagoric"}},
                {id: 20, tile: 3, player: false},
                {id: 21, tile: 1, player: false},
                {id: 22, tile: 4, player: false},
                {id: 23, tile: 4, player: false},
                {id: 24, tile: 4, player: false},
                {id: 25, tile: 5, player: false},
            ]
        }
    }
}
</script>

<style scoped>
.map-wrapper {
    width:1000px
}
</style>