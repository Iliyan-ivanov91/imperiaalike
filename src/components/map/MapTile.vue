<template>
    <div class="tile relative">
        <img :src="getTile(this.tile)" alt="" class="absolute left-0 top-0 w-full h-full">
    </div>
</template>

<script>
export default {
    props:['tile'],
    methods: {
        getTile(type) {
            var tile = require.context('../../assets/tiles/', false, /\.png$/);
            return tile('./' + type + ".png");
        }
    }
}
</script>

<style scoped>
.tile {
    width:200px;
    height:200px;
}
</style>