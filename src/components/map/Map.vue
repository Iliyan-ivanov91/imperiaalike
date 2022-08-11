<template>
    <div class="w-screen h-screen overflow-hidden map-overflow" v-dragscroll>
        <div class="flex flex-wrap map-wrapper" v-dragscroll>
            <MapTile v-for="tile in newMapTiles"
                    :key="tile.id"
                    :tile="tile.type"
                    :xcoordinate="tile.x"
                    :ycoordinate="tile.y"
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
        },
        generateTiles() {
            let generatedTiles = []
            let x = 1;
            let y = 1;
            for (var i=1; i<=225; i++){
                if(x == 16){
                    y++;
                    x = 1;
                }
                let t = {'id': i, 'type': this.randomTile(), 'x': x, 'y':y}
                x++;
                generatedTiles.push(t);
            }
            return generatedTiles
        },
        newMapTiles() {
            return this.generateTiles
        }
    },
    methods: {
        randomTile() {
            return Math.floor(Math.random() * 11 + 1)
        },
    }
}
</script>

<style scoped>
.map-wrapper {
    width:3002px;
    height: 3002px;
    transform: rotateX(60deg) rotateZ(-45deg);
    background: #a5aa13;
    margin-left: 33%;
    border: 1px solid rgb(255 255 255 / 20%);
}
.map-overflow {
    position: relative;
    background: url('../../assets/tiles/water/6.4.png') repeat;
}
.map-overflow:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url('../../assets/tiles/water/6.4.png') repeat;
    transform: rotateX(60deg) rotateZ(-45deg);
}
</style>