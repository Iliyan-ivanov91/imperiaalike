<template>
    <div class="tile relative" :style="{backgroundImage: 'url(' + getTile(this.tile) + ')'}" :data-x-coordinates="tile.x">
        <!-- <img :src="getTile(this.tile)" alt="" class="absolute left-0 top-0 w-full h-full"> -->
    </div>
</template>

<script>
export default {
    props:['tile'],
    methods: {
        getTile(type) {
            var tile = require.context('../../assets/tiles/new/', false, /\.png$/);
            return tile('./' + type + ".png");
        }
    }
}
</script>

<style scoped>
.tile {
    width:200px;
    height:200px;
    background-size:cover;
    border: 1px solid rgb(255 255 255 / 20%);
}
</style>